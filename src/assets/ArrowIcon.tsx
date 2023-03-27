import React from 'react';
import { Icon } from '../types';

const ArrowIcon = ({
  width = 14,
  height = 14,
  fill = '#fff',
}: Icon): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m2.131 7.29 3.88-3.88 3.88 3.88a.996.996 0 1 0 1.41-1.41l-4.59-4.59a.996.996 0 0 0-1.41 0L.711 5.88a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
      fill={fill}
    />
  </svg>
);

export default ArrowIcon;
