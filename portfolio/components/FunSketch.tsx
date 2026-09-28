"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";

const palette = ["#F4D01C", "#E9BE3E", "#fcd300", "#E0DB19", "#F3EC2D"];

export default function FunSketch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5 | undefined;
    let cancelled = false;

    async function init() {
      const [{ default: P5 }, brush] = await Promise.all([
        import("p5"),
        import("p5.brush"),
      ]);

      if (cancelled || !containerRef.current) return;

      sketch = new P5((p: p5) => {
        p.setup = () => {
          const maxWidth = Math.min(window.innerWidth * 0.6, 900);
          const width = Math.round(maxWidth);   
          const height = Math.round(maxWidth );
          p.createCanvas(width, height, p.WEBGL);
          p.frameRate(24);
          p.pixelDensity(1);

          brush.instance(p);
          brush.load();
          brush.add("myBrush", {
            type: "marker",
            weight: 1,
            scatter: 0.3,
            opacity: 2,
            spacing: 0.2,
            noise: 0.1,
            pressure: [0.9, 0.7],
            rotate: "none",
            markerTip: true,
            tip: (_m: p5) => {
              _m.fill(0, 123);
              _m.rotate(45);
              _m.rect(10, 20, 15, 15);
              _m.rect(10, 10, 25, 15);
            },
          });

          p.angleMode(p.DEGREES);
        };

        function system() {
          const y = 100 * p.cos(p.frameCount * 0.5);

          for (let i = 0; i < 20; i++) {
            brush.set("myBrush", p.random(palette), p.map(i, 0, 24, 20, 7));
            p.rotate(2 * p.PI * i);

            brush.circle(20 * i, y, i);
            brush.circle(-20 * i, y, i);
            brush.circle(20 * i, -y, i);
            brush.circle(-20 * i, -y, i);

            brush.line(20 * i, y, 0, 0);
            brush.line(-20 * i, y, 0, 0);
            brush.line(20 * i, -y, 0, 0);
            brush.line(-20 * i, -y, 0, 0);
          }
        }

        p.draw = () => {
          p.background("#242627");
          p.fill("#242627");
          p.circle(0, 0, 40);

          p.push();
          p.rotate((p.sin(p.frameCount) * p.frameCount) / 10);
          system();
          p.pop();
        };

        p.keyPressed = () => {
          if (p.key === "s") {
            p.saveGif("mySketch.gif", 240, { units: "frames" });
          }
        };
      }, containerRef.current);
    }

    void init();

    return () => {
      cancelled = true;
      sketch?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fun-sketch flex w-full justify-center overflow-hidden"
      aria-label="Generative brush sketch"
    />
  );
}
