import { memo, SVGProps } from 'react';

const SvgIcon25 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.8417 6.175L11.6667 5L6.66667 10L11.6667 15L12.8417 13.825L9.025 10L12.8417 6.175Z'
      fill='black'
      fillOpacity={0.87}
    />
  </svg>
);

const Memo = memo(SvgIcon25);
export { Memo as SvgIcon25 };
