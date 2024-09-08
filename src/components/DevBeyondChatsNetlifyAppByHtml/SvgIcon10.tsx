import { memo, SVGProps } from 'react';

const SvgIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z'
      fill='#FA2871'
    />
  </svg>
);

const Memo = memo(SvgIcon10);
export { Memo as SvgIcon10 };
