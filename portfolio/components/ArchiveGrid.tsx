"use client";

import { useEffect } from "react";
import { initArchiveGrid } from "@/lib/archive-grid";

export default function ArchiveGrid() {
  useEffect(() => {
    initArchiveGrid();
  }, []);

  return (
    <div className="container">
      <div className="w-full">
        <div
          className="archive-infinite-grid"
          id="archive-infinite-grid"
          aria-label="Draggable archive gallery"
        >
          <div className="archive-grid-track" id="archive-grid-track" />
          <div className="archive-grid-header">
            <h2>Archive (2023-2026)</h2>
            <p>Old scraps from the past.Click and drag to sort.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
