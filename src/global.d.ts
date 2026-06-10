declare namespace JSX {
  interface IntrinsicElements {
    primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      /** GLTF or three.js object to render */
      object: any;
      /** Scale factor */
      scale?: number;
      /** Position (can be number or array) */
      position?: any;
      /** Rotation (can be number or array) */
      rotation?: any;
      /** Allow any additional props */
      [key: string]: any;
    };
  }
}
