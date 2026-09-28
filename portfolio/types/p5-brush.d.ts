declare module "p5.brush" {
  import type p5 from "p5";

  type BrushTip = (graphics: p5) => void;

  type BrushParams = {
    type?: string;
    weight?: number;
    scatter?: number;
    opacity?: number;
    spacing?: number;
    noise?: number;
    pressure?: number[] | Record<string, unknown>;
    rotate?: string;
    markerTip?: boolean;
    tip?: BrushTip;
  };

  export function instance(p: p5): void;
  export function load(target?: unknown): void;
  export function add(name: string, params: BrushParams): void;
  export function set(name: string, color: string | number, weight?: number): void;
  export function circle(x: number, y: number, radius: number, noise?: boolean): unknown;
  export function line(x1: number, y1: number, x2: number, y2: number): void;
  export function beginShape(curvature?: number): void;
  export function vertex(x: number, y: number, pressure?: number): void;
  export function endShape(close?: boolean): unknown;
}
