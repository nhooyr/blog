// https://github.com/smooth-code/svgr/issues/301
declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';
  const _: FunctionComponent<SVGProps<HTMLOrSVGElement>>;
  export = _;
}
