import type { SVGProps } from 'react';
import * as React from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="url(#a)"
      d="m22.227 76.864-4.164-12.467 4.165-12.998 13.693-7.905 18.962 10.95c.583.335.817.74.817 1.414v1.68L22.227 76.864Z"
    />
    <path
      fill="url(#b)"
      d="m26.83 76.888 26.576 15.345c2.928 1.69 6.28 1.69 9.209 0L51.47 116.58 6.514 90.622C2.477 88.205.173 84.136.173 79.41V64.123L22.225 51.39v17.525c0 3.38 1.677 6.284 4.605 7.974Z"
    />
    <path
      fill="url(#c)"
      d="m62.617 92.236 53.21-30.72V86.98l-51.274 29.602c-4.158 2.402-8.92 2.402-13.08 0L29.421 103.85c4.16 2.4 8.92 2.4 13.08 0l20.115-11.614Z"
    />
    <path
      fill="url(#d)"
      d="m93.772 41.53 3.44 12.904-3.44 12.563L80.08 74.9l-18.964-10.95c-.583-.335-.816-.74-.816-1.413v-1.68C81.63 48.54 72.44 53.846 93.772 41.53Z"
    />
    <path
      fill="url(#e)"
      d="M89.168 41.492 62.59 26.146c-2.928-1.69-6.28-1.69-9.209 0L64.528 1.8l44.956 25.957c4.037 2.417 6.344 6.486 6.344 11.212v15.287L93.772 66.99V49.466c0-3.38-1.677-6.285-4.604-7.974Z"
    />
    <path
      fill="url(#f)"
      d="M53.382 26.147.174 56.867V31.401l51.272-29.6c4.158-2.401 8.92-2.401 13.08 0l22.05 12.732c-4.157-2.4-8.92-2.4-13.08 0L53.382 26.147Z"
    />
    <path
      fill="#020C6A"
      d="M62.46 26.073c-2.927-1.692-6.28-1.692-9.207 0l20.114-11.615c4.16-2.401 8.922-2.401 13.083 0l6.035 3.487c-4.16-2.402-8.922-2.402-13.082 0L63.893 26.9l-1.432-.827ZM53.411 92.234c2.928 1.69 6.28 1.69 9.209 0l-20.115 11.614c-4.16 2.4-8.92 2.4-13.08 0l-6.036-3.486c4.16 2.401 8.92 2.401 13.08 0l15.51-8.955 1.432.827Z"
    />
    <path
      fill="#01052D"
      d="M91.871 52.675c-.366-2.763-2.05-4.953-4.628-6.018l-1.37-.565c1.48-.856 3.22-1.858 5.3-3.06 1.675 1.682 2.6 3.93 2.6 6.44v17.524l-1.902-14.32ZM24.128 65.71c.368 2.763 2.053 4.953 4.628 6.018l1.37.565c-1.48.856-3.22 1.858-5.301 3.06-1.674-1.682-2.599-3.93-2.599-6.44V51.388l1.902 14.322Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={17.32}
        x2={50.543}
        y1={64.676}
        y2={51.962}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#021B8D" />
        <stop offset={1} stopColor="#0463EF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={47.657}
        x2={13.853}
        y1={128.352}
        y2={42.653}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0049E7" />
        <stop offset={1} stopColor="#9C00D3" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={123.93}
        x2={37.184}
        y1={71.355}
        y2={115.181}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0049E7" />
        <stop offset={0.61} stopColor="#1A85F8" />
        <stop offset={1} stopColor="#66E5FB" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={94.302}
        x2={71.204}
        y1={43.556}
        y2={70.806}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#021B8D" />
        <stop offset={1} stopColor="#0463EF" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={68.341}
        x2={102.144}
        y1={-9.975}
        y2={75.724}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0049E7" />
        <stop offset={1} stopColor="#7F0085" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={-4.569}
        x2={82.057}
        y1={50.645}
        y2={0.634}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0131B9" />
        <stop offset={0.43} stopColor="#078DAB" />
        <stop offset={1} stopColor="#55F9EF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
