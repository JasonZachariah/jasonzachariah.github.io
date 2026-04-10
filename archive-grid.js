const gridRoot = document.getElementById("archive-infinite-grid");
const gridTrack = document.getElementById("archive-grid-track");

if (gridRoot && gridTrack) {
  const items = [
    { type: "video", src: "images/archive/Blender Animated copy.mp4", fit: "contain" },
    { type: "video", src: "images/archive/Ponyboy.mp4", fit: "contain" },
    { type: "image", src: "images/archive/markhamfairgif.gif", alt: "Markham Fair GIF", fit: "contain" },
    { type: "image", src: "images/archive/Somethingforeverythingif.gif", alt: "Something for Everything GIF", fit: "contain" },
    { type: "image", src: "images/archive/swap gif.gif", alt: "Swap GIF", fit: "contain" },
    { type: "image", src: "images/archive/SkulltoHuman.gif", alt: "Skull to Human GIF", fit: "contain" },
    { type: "image", src: "images/archive/saylchair.gif", alt: "Sayl Chair GIF", fit: "contain" },
    { type: "image", src: "images/archive/oldaniamtionslogo.gif", alt: "Old Animation", fit: "contain" }
  ];

  const CARD_ROTATION_LIMIT = 3;
  const CARD_PADDING = 12;
  const CARD_SEPARATION = 14;
  const ROTATION_BBOX_BUFFER = 10;
  const MAX_PLACEMENT_ATTEMPTS = 700;
  const MAX_LAYOUT_RETRIES = 40;
  const MEDIA_SCALE_STEPS = [1, 0.88, 0.76, 0.64, 0.52, 0.42];
  const BURST_DURATION_MS = 720;
  const BURST_MAX_STAGGER_MS = 260;
  const LAYOUT_WAIT_MAX_FRAMES = 72;
  let dragZBase = 10;
  let layoutGeneration = 0;

  function randomInRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function overlapsWithSeparation(rectA, rectB) {
    const buffer = CARD_SEPARATION + ROTATION_BBOX_BUFFER;
    return !(
      rectA.x + rectA.w + buffer <= rectB.x ||
      rectB.x + rectB.w + buffer <= rectA.x ||
      rectA.y + rectA.h + buffer <= rectB.y ||
      rectB.y + rectB.h + buffer <= rectA.y
    );
  }

  function createTileElement(item) {
    const cell = document.createElement("div");
    const card = document.createElement("div");
    const rotation = randomInRange(-CARD_ROTATION_LIMIT, CARD_ROTATION_LIMIT);
    cell.className = "archive-grid-cell";
    card.className = "archive-grid-card";
    card.style.transform = `rotate(${rotation}deg)`;

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
      card.appendChild(video);
      cell.appendChild(card);
      return cell;
    }

    const img = document.createElement("img");
    img.className = `archive-grid-media archive-fit-${item.fit || "contain"}`;
    img.src = item.src;
    img.alt = item.alt || "";
    img.loading = "eager";
    card.appendChild(img);
    cell.appendChild(card);
    return cell;
  }

  function tryPlaceCards(cells) {
    const rootWidth = gridRoot.clientWidth;
    const rootHeight = gridRoot.clientHeight;
    const minX = CARD_PADDING;
    const minY = CARD_PADDING;
    const placedRects = [];
    const chosenRects = [];

    for (const cell of cells) {
      const cardWidth = cell.offsetWidth;
      const cardHeight = cell.offsetHeight;
      if (cardWidth < 4 || cardHeight < 4) {
        return null;
      }
      const maxX = Math.max(CARD_PADDING, rootWidth - cardWidth - CARD_PADDING);
      const maxY = Math.max(CARD_PADDING, rootHeight - cardHeight - CARD_PADDING);
      if (maxX < minX || maxY < minY) {
        return null;
      }

      let chosen = null;

      for (let i = 0; i < MAX_PLACEMENT_ATTEMPTS; i += 1) {
        const candidate = {
          x: randomInRange(minX, maxX),
          y: randomInRange(minY, maxY),
          w: cardWidth,
          h: cardHeight
        };
        if (!placedRects.some((placed) => overlapsWithSeparation(candidate, placed))) {
          chosen = candidate;
          break;
        }
      }

      if (!chosen) {
        return null;
      }
      placedRects.push(chosen);
      chosenRects.push(chosen);
    }

    return chosenRects;
  }

  function burstCardsToPositions(cells, placed, gen) {
    const rootWidth = gridRoot.clientWidth;
    const rootHeight = gridRoot.clientHeight;
    const centerX = rootWidth / 2;
    const centerY = rootHeight / 2;
    const distances = placed.map((rect) =>
      Math.hypot(rect.x + rect.w / 2 - centerX, rect.y + rect.h / 2 - centerY)
    );
    const maxDist = Math.max(...distances, 1);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      cells.forEach((cell, index) => {
        const chosen = placed[index];
        cell.style.transition = "";
        cell.style.transform = "";
        cell.style.opacity = "";
        cell.style.left = `${chosen.x}px`;
        cell.style.top = `${chosen.y}px`;
      });
      return;
    }

    cells.forEach((cell, index) => {
      const rect = placed[index];
      const startLeft = (rootWidth - rect.w) / 2;
      const startTop = (rootHeight - rect.h) / 2;
      cell.getAnimations?.().forEach((a) => a.cancel());
      cell.style.transition = "none";
      cell.style.transform = "scale(0.08)";
      cell.style.opacity = "0";
      cell.style.left = `${startLeft}px`;
      cell.style.top = `${startTop}px`;
    });

    void gridTrack.offsetHeight;
    for (let i = 0; i < cells.length; i += 1) {
      void cells[i].offsetHeight;
    }

    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
    const useWAAPI = typeof Element.prototype.animate === "function";

    const startBurst = () => {
      if (gen !== layoutGeneration) return;

      cells.forEach((cell, index) => {
        if (gen !== layoutGeneration) return;
        const chosen = placed[index];
        const delay = Math.round((distances[index] / maxDist) * BURST_MAX_STAGGER_MS);

        if (useWAAPI) {
          try {
            const w = chosen.w;
            const h = chosen.h;
            const fromLeft = (rootWidth - w) / 2;
            const fromTop = (rootHeight - h) / 2;
            const anim = cell.animate(
              [
                {
                  left: `${fromLeft}px`,
                  top: `${fromTop}px`,
                  transform: "scale(0.08)",
                  opacity: 0
                },
                {
                  left: `${chosen.x}px`,
                  top: `${chosen.y}px`,
                  transform: "scale(1)",
                  opacity: 1
                }
              ],
              { duration: BURST_DURATION_MS, delay, easing, fill: "forwards" }
            );
            anim.addEventListener("finish", () => {
              if (gen !== layoutGeneration) return;
              try {
                anim.commitStyles?.();
              } catch (_) {
                /* older browsers */
              }
              anim.cancel();
              cell.style.transition = "";
              cell.style.left = `${chosen.x}px`;
              cell.style.top = `${chosen.y}px`;
              cell.style.transform = "scale(1)";
              cell.style.opacity = "1";
            });
          } catch (_) {
            cell.style.transition = [
              `left ${BURST_DURATION_MS}ms ${easing} ${delay}ms`,
              `top ${BURST_DURATION_MS}ms ${easing} ${delay}ms`,
              `transform ${BURST_DURATION_MS}ms ${easing} ${delay}ms`,
              `opacity ${Math.round(BURST_DURATION_MS * 0.55)}ms ease-out ${delay}ms`
            ].join(", ");
            cell.style.left = `${chosen.x}px`;
            cell.style.top = `${chosen.y}px`;
            cell.style.transform = "scale(1)";
            cell.style.opacity = "1";
          }
        } else {
          cell.style.transition = [
            `left ${BURST_DURATION_MS}ms ${easing} ${delay}ms`,
            `top ${BURST_DURATION_MS}ms ${easing} ${delay}ms`,
            `transform ${BURST_DURATION_MS}ms ${easing} ${delay}ms`,
            `opacity ${Math.round(BURST_DURATION_MS * 0.55)}ms ease-out ${delay}ms`
          ].join(", ");
          cell.style.left = `${chosen.x}px`;
          cell.style.top = `${chosen.y}px`;
          cell.style.transform = "scale(1)";
          cell.style.opacity = "1";
        }
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(startBurst);
      });
    });
  }

  function whenMediaReady(cell) {
    const media = cell.querySelector("img, video");
    if (!media) {
      return Promise.resolve();
    }
    if (media.tagName === "IMG") {
      if (media.complete && media.naturalWidth > 0) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        media.addEventListener("load", resolve, { once: true });
        media.addEventListener("error", resolve, { once: true });
      });
    }
    if (media.tagName === "VIDEO") {
      if (media.readyState >= 1 && media.videoWidth > 0) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        const done = () => resolve();
        media.addEventListener("loadedmetadata", done, { once: true });
        media.addEventListener("error", done, { once: true });
      });
    }
    return Promise.resolve();
  }

  function placeCards(cells, gen) {
    if (gen !== layoutGeneration) return;
    if (cells.length === 0) return;

    let placed = null;

    for (let s = 0; s < MEDIA_SCALE_STEPS.length && !placed; s += 1) {
      if (gen !== layoutGeneration) return;
      const scale = MEDIA_SCALE_STEPS[s];
      gridRoot.style.setProperty("--archive-media-scale", String(scale));
      void gridRoot.offsetHeight;

      for (let retry = 0; retry < MAX_LAYOUT_RETRIES && !placed; retry += 1) {
        placed = tryPlaceCards(cells);
      }
    }

    if (!placed) return;

    burstCardsToPositions(cells, placed, gen);
  }

  function schedulePlaceCardsWhenReady(cells, gen, frame = 0) {
    if (gen !== layoutGeneration) return;
    const w = gridRoot.clientWidth;
    const h = gridRoot.clientHeight;
    const layoutReady = w >= 2 && h >= 2;
    if (!layoutReady && frame < LAYOUT_WAIT_MAX_FRAMES) {
      requestAnimationFrame(() => schedulePlaceCardsWhenReady(cells, gen, frame + 1));
      return;
    }
    Promise.all(cells.map((cell) => whenMediaReady(cell))).then(() => {
      if (gen !== layoutGeneration) return;
      requestAnimationFrame(() => placeCards(cells, gen));
    });
  }

  function attachArchiveDrag(cell) {
    let activePointerId = null;
    let grabOffsetX = 0;
    let grabOffsetY = 0;

    cell.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      activePointerId = event.pointerId;
      cell.setPointerCapture(activePointerId);
      cell.classList.add("archive-grid-cell--dragging");
      cell.style.transition = "none";
      dragZBase += 1;
      cell.style.zIndex = String(dragZBase);
      const cellRect = cell.getBoundingClientRect();
      grabOffsetX = event.clientX - cellRect.left;
      grabOffsetY = event.clientY - cellRect.top;
    });

    cell.addEventListener("pointermove", (event) => {
      if (event.pointerId !== activePointerId) return;
      const trackRect = gridTrack.getBoundingClientRect();
      let left = event.clientX - trackRect.left - grabOffsetX;
      let top = event.clientY - trackRect.top - grabOffsetY;
      const w = cell.offsetWidth;
      const h = cell.offsetHeight;
      const maxLeft = Math.max(CARD_PADDING, gridTrack.clientWidth - w - CARD_PADDING);
      const maxTop = Math.max(CARD_PADDING, gridTrack.clientHeight - h - CARD_PADDING);
      left = Math.max(CARD_PADDING, Math.min(maxLeft, left));
      top = Math.max(CARD_PADDING, Math.min(maxTop, top));
      cell.style.left = `${left}px`;
      cell.style.top = `${top}px`;
    });

    function endDrag(event) {
      if (event.pointerId !== activePointerId) return;
      cell.releasePointerCapture(activePointerId);
      activePointerId = null;
      cell.classList.remove("archive-grid-cell--dragging");
    }

    cell.addEventListener("pointerup", endDrag);
    cell.addEventListener("pointercancel", endDrag);
  }

  function buildScatter() {
    layoutGeneration += 1;
    const gen = layoutGeneration;
    gridRoot.style.setProperty("--archive-media-scale", "1");
    gridTrack.textContent = "";
    const cells = items.map((item) => {
      const cell = createTileElement(item);
      gridTrack.appendChild(cell);
      attachArchiveDrag(cell);
      return cell;
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        schedulePlaceCardsWhenReady(cells, gen, 0);
      });
    });
  }

  window.addEventListener("resize", buildScatter);
  buildScatter();
}
