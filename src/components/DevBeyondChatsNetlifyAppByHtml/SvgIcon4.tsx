import { memo, SVGProps } from 'react';

const SvgIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7 10.44L12 15.44L17 10.44H7Z' fill='black' fillOpacity={0.54} />
  </svg>
);

const Memo = memo(SvgIcon4);
export { Memo as SvgIcon4 };
