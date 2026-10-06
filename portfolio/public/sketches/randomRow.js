(function () {
  const mountEl = document.getElementById("random-row");
  if (!mountEl) return;

  const { supabaseUrl, supabaseKey, table } = mountEl.dataset;
  if (!supabaseUrl || !supabaseKey || !table) {
    mountEl.textContent = "Supabase is not configured.";
    return;
  }

  const endpoint = `${supabaseUrl}/rest/v1/${encodeURIComponent(table)}`;
  const columns = "email,test1,scale";
  const headers = {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
  };

  async function getRowCount() {
    const res = await fetch(`${endpoint}?select=*`, {
      method: "HEAD",
      headers: { ...headers, Prefer: "count=exact" },
    });
    if (!res.ok) throw new Error(`Count request failed (${res.status})`);
    // Content-Range looks like "0-24/250" or "*/0"
    const total = res.headers.get("content-range")?.split("/")[1];
    return Number(total) || 0;
  }

  async function getRandomRow(count) {
    const offset = Math.floor(Math.random() * count);
    const res = await fetch(`${endpoint}?select=${columns}&limit=1&offset=${offset}`, { headers });
    if (!res.ok) throw new Error(`Row request failed (${res.status})`);
    const rows = await res.json();
    return rows[0] ?? null;
  }


  function render(row) {
    mountEl.replaceChildren();
    const list = document.createElement("dl");
    list.className = "greyborder p-4 space-y-2";

    for (const [key, value] of Object.entries(row)) {
      const item = document.createElement("div");
      const term = document.createElement("dt");
      term.className = "header";
      term.textContent = key;

      const detail = document.createElement("dd");
      detail.textContent = value !== null && typeof value === "object" ? JSON.stringify(value) : String(value);
      if (key === "scale") {
        detail.style.fontSize = "3rem";
      } else {
        detail.className = "p";
      }
      item.append(detail);
      list.append(item);
    }

    mountEl.append(list);
  }

  const REFRESH_MS = 5000;

  async function start() {
    mountEl.textContent = "Loading...";

    let count;
    try {
      count = await getRowCount();
    } catch (err) {
      console.error(err);
      mountEl.textContent = "Could not load a row.";
      return;
    }
    if (count === 0) {
      mountEl.textContent = "No rows found.";
      return;
    }

    let hasRendered = false;
    async function showRandomRow() {
      try {
        const row = await getRandomRow(count);
        if (row) {
          render(row);
          hasRendered = true;
        }
      } catch (err) {
        console.error(err);
        if (!hasRendered) mountEl.textContent = "Could not load a row.";
      }
    }

    await showRandomRow();
    const intervalId = setInterval(() => {
      // Stop when the page navigates away and the mount element is removed.
      if (!mountEl.isConnected) {
        clearInterval(intervalId);
        return;
      }
      showRandomRow();
    }, REFRESH_MS);
  }

  start();
})();
