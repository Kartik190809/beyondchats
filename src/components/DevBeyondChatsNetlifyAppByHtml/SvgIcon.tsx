import { memo, SVGProps } from 'react';

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.8333 10.8333H10.8333V15.8333H9.16667V10.8333H4.16667V9.16667H9.16667V4.16667H10.8333V9.16667H15.8333V10.8333Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(SvgIcon);
export { Memo as SvgIcon };
