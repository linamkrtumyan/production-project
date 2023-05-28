declare module '*.scss' {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGAElement>>;
  export default SVG;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
