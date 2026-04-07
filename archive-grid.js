const gridRoot = document.getElementById("archive-infinite-grid");
const gridTrack = document.getElementById("archive-grid-track");

if (gridRoot && gridTrack) {
  const items = [
    { type: "video", src: "images/archive/Blender Animated copy.mp4", fit: "contain" },
    { type: "video", src: "images/archive/Ponyboy.mp4", fit: "contain" },
    { type: "image", src: "images/archive/markhamfairgif.gif", alt: "Markham Fair GIF", fit: "contain" },
    { type: "image", src: "images/archive/Somethingforeverythingif.gif", alt: "Something for Everything GIF", fit: "contain" },
    { type: "image", src: "images/archive/swap gif.gif", alt: "Swap GIF", fit: "contain" },
    { type: "image", src: "images/archive/SkulltoHuman.gif", alt: "Skull to Human GIF", fit: "contain" }
  ];

  const cols = 3;
  const rows = Math.ceil(items.length / cols);
  const repeatRange = 2;
  let tileSize = 280;
  let gap = 20;
  let periodWidth = 0;
  let periodHeight = 0;
  let offsetX = 0;
  let offsetY = 0;
  let dragActive = false;
  let pointerId = null;
  let lastX = 0;
  let lastY = 0;
  const DRAG_SPEED = 1.35;
  const WHEEL_SPEED = 1.2;

  const tileRefs = [];

  function mod(value, m) {
    return ((value % m) + m) % m;
  }

  function normalizeOffsets() {
    if (periodWidth > 0) {
      while (offsetX > periodWidth / 2) {
        offsetX -= periodWidth;
      }
      while (offsetX < -periodWidth / 2) {
        offsetX += periodWidth;
      }
    }
    if (periodHeight > 0) {
      while (offsetY > periodHeight / 2) {
        offsetY -= periodHeight;
      }
      while (offsetY < -periodHeight / 2) {
        offsetY += periodHeight;
      }
    }
  }

  function getGridMetrics() {
    const css = getComputedStyle(gridRoot);
    tileSize = parseFloat(css.getPropertyValue("--archive-tile-size")) || 280;
    gap = parseFloat(css.getPropertyValue("--archive-grid-gap")) || 20;
    periodWidth = cols * tileSize + (cols - 1) * gap;
    periodHeight = rows * tileSize + (rows - 1) * gap;
  }

  function createTileElement(item) {
    const cell = document.createElement("div");
    cell.className = "archive-grid-cell";
    cell.style.width = `${tileSize}px`;
    cell.style.height = `${tileSize}px`;

    if (item.type === "video") {
      const video = document.createElement("video");
      video.className = `archive-grid-media archive-fit-${item.fit || "contain"}`;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      const source = document.createElement("source");
      source.src = item.src;
      source.type = "video/mp4";
      video.appendChild(source);
      cell.appendChild(video);
      return cell;
    }

    if (item.type === "iframe") {
      const iframe = document.createElement("iframe");
      iframe.className = "archive-grid-media";
      iframe.src = item.src;
      iframe.title = item.title || "Archive embed";
      iframe.loading = "lazy";
      iframe.setAttribute("tabindex", "-1");
      cell.appendChild(iframe);
      return cell;
    }

    const img = document.createElement("img");
    img.className = `archive-grid-media archive-fit-${item.fit || "contain"}`;
    img.src = item.src;
    img.alt = item.alt || "";
    img.loading = "lazy";
    cell.appendChild(img);
    return cell;
  }

  function buildTiles() {
    gridTrack.textContent = "";
    tileRefs.length = 0;
    getGridMetrics();

    for (let ry = -repeatRange; ry <= repeatRange; ry += 1) {
      for (let rx = -repeatRange; rx <= repeatRange; rx += 1) {
        items.forEach((item, index) => {
          const col = index % cols;
          const row = Math.floor(index / cols);
          const x = rx * periodWidth + col * (tileSize + gap);
          const y = ry * periodHeight + row * (tileSize + gap);
          const node = createTileElement(item);
          gridTrack.appendChild(node);
          tileRefs.push({ node, x, y });
        });
      }
    }
    render();
  }

  function render() {
    normalizeOffsets();
    for (const tile of tileRefs) {
      tile.node.style.transform = `translate(${tile.x + offsetX}px, ${tile.y + offsetY}px)`;
    }
  }

  function onPointerDown(event) {
    dragActive = true;
    pointerId = event.pointerId;
    lastX = event.clientX;
    lastY = event.clientY;
    gridRoot.classList.add("dragging");
    gridRoot.setPointerCapture(pointerId);
  }

  function onPointerMove(event) {
    if (!dragActive || event.pointerId !== pointerId) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    offsetX += dx * DRAG_SPEED;
    offsetY += dy * DRAG_SPEED;
    render();
  }

  function onPointerUp(event) {
    if (event.pointerId !== pointerId) return;
    dragActive = false;
    gridRoot.classList.remove("dragging");
    gridRoot.releasePointerCapture(pointerId);
    pointerId = null;
  }

  function onWheel(event) {
    event.preventDefault();
    offsetX -= event.deltaX * WHEEL_SPEED;
    offsetY -= event.deltaY * WHEEL_SPEED;
    render();
  }

  gridRoot.addEventListener("pointerdown", onPointerDown);
  gridRoot.addEventListener("pointermove", onPointerMove);
  gridRoot.addEventListener("pointerup", onPointerUp);
  gridRoot.addEventListener("pointercancel", onPointerUp);
  gridRoot.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("resize", render);

  buildTiles();
}
