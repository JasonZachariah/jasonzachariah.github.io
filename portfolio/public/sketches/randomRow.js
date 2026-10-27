(function () {
  const mountEl = document.getElementById("random-row");
  if (!mountEl) return;

  const supabaseUrl = (mountEl.dataset.supabaseUrl || "").trim().replace(/^['"]|['"]$/g, "");
  const supabaseKey = (mountEl.dataset.supabaseKey || "").trim().replace(/^['"]|['"]$/g, "");
  const table = (mountEl.dataset.table || "").trim();
  if (!supabaseUrl || !supabaseKey || !table) {
    mountEl.textContent = "Supabase is not configured.";
    return;
  }

  const endpoint = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/${encodeURIComponent(table)}`;
  const columns = "stream,test1,scale";
  const headers = {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    Accept: "application/json",
  };

  async function getRows() {
    const res = await fetch(`${endpoint}?select=${columns}`, { headers });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Row request failed (${res.status}) ${body}`.trim());
    }
    return res.json();
  }

  const STREAM_COLORS = {
    design: "#7c3aed",
    desn: "#7c3aed",
    ux: "#2563eb",
    ui: "#2563eb",
    "ux/ui": "#2563eb",
    tech: "#0f766e",
    code: "#0f766e",
    development: "#0f766e",
    art: "#ca8a04",
    illustration: "#ca8a04",
    media: "#db2777",
    business: "#ea580c",
  };

  function colorForStream(stream) {
    const name = String(stream ?? "").trim().toLowerCase();
    if (!name) return null;
    if (STREAM_COLORS[name]) return STREAM_COLORS[name];

    let hash = 0;
    for (let i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `oklch(0.55 0.18 ${hue})`;
  }

  function render(row) {
    mountEl.replaceChildren();
    const list = document.createElement("dl");
    list.className = "greyborder p-4 space-y-2";

    const streamColor = colorForStream(row.stream);
    if (streamColor) {
      list.style.boxShadow = `0 0 0 2px ${streamColor}`;
      list.style.backgroundColor = `color-mix(in oklab, ${streamColor} 12%, white)`;
    }

    for (const [key, value] of Object.entries(row)) {
      const item = document.createElement("div");
      const detail = document.createElement("dd");
      detail.textContent =
        value !== null && typeof value === "object" ? JSON.stringify(value) : String(value);
      if (key === "scale") {
        detail.style.fontSize = "3rem";
      } else {
        detail.className = "p";
      }
      if (key === "stream" && streamColor) {
        detail.style.color = streamColor;
        detail.style.fontWeight = "650";
      }
      item.append(detail);
      list.append(item);
    }

    mountEl.append(list);
  }

  function showError(err) {
    console.error(err);
    const networkFailure = err instanceof TypeError;
    mountEl.textContent = networkFailure
      ? "Could not reach Supabase. Restore the project in the dashboard if it is paused, then refresh."
      : "Could not load a row.";
  }

  const REFRESH_MS = 5000;

  async function start() {
    mountEl.textContent = "Loading...";

    let rows;
    try {
      rows = await getRows();
    } catch (err) {
      showError(err);
      return;
    }
    if (!Array.isArray(rows) || rows.length === 0) {
      mountEl.textContent = "No rows found.";
      return;
    }

    function showRandomRow() {
      const row = rows[Math.floor(Math.random() * rows.length)];
      if (row) render(row);
    }

    showRandomRow();
    const intervalId = setInterval(async () => {
      if (!mountEl.isConnected) {
        clearInterval(intervalId);
        return;
      }
      try {
        const fresh = await getRows();
        if (Array.isArray(fresh) && fresh.length) rows = fresh;
      } catch (err) {
        console.error(err);
      }
      showRandomRow();
    }, REFRESH_MS);
  }

  start();
})();
