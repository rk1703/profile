import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * React‑Three‑Fiber primitive element – lets you mount any Three.js Object3D.
       */
      primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        /** The Three.js object (Scene, Mesh, Group, etc.) */
        object: any;
        /** Uniform scale or [x, y, z] */
        scale?: number | [number, number, number];
        /** Position – can be array or partial object */
        position?: [number, number, number] | { x?: number; y?: number; z?: number };
        /** Rotation in radians */
        rotation?: [number, number, number] | { x?: number; y?: number; z?: number };
        /** Any other prop forwarded to the underlying three object */
        [key: string]: any;
      };
    }
  }
}

export {};
