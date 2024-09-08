import { memo, SVGProps } from 'react';

const SvgIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.5 5H15.8333V12.5H5V14.1667C5 14.625 5.375 15 5.83333 15H15L18.3333 18.3333V5.83333C18.3333 5.375 17.9583 5 17.5 5ZM14.1667 10V2.5C14.1667 2.04167 13.7917 1.66667 13.3333 1.66667H2.5C2.04167 1.66667 1.66667 2.04167 1.66667 2.5V14.1667L5 10.8333H13.3333C13.7917 10.8333 14.1667 10.4583 14.1667 10Z'
      fill='#FA2871'
    />
  </svg>
);

const Memo = memo(SvgIcon3);
export { Memo as SvgIcon3 };
