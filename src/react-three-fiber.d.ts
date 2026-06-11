// Augmentation for @react-three/fiber JSX intrinsic <primitive>
import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        object: any;
        attach?: string;
        dispose?: null | undefined;
        visible?: boolean;
        ref?: React.Ref<any>;
        onUpdate?: (self: any) => void;
        onCreated?: (self: any) => void;
      };
    }
  }
}

export {};
