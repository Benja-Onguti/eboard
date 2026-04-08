/// <reference types="vite/client" />

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default SVG;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
