import { memo, SVGProps } from 'react';

const SvgIcon26 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.33333 5L7.15833 6.175L10.975 10L7.15833 13.825L8.33333 15L13.3333 10L8.33333 5Z'
      fill='black'
      fillOpacity={0.87}
    />
  </svg>
);

const Memo = memo(SvgIcon26);
export { Memo as SvgIcon26 };
