import React from 'react';

interface IProps {
  radius?: number,
  effect?: string
};

const RoundedCornersFilter = ({ radius = 10, effect = 'blur' }: IProps) => {
  return (
    <svg className="svg-musk" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="round">
          <feGaussianBlur in="SourceGraphic" stdDeviation={ radius } result={ effect } />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
      </defs>
    </svg>
  );
};

export default RoundedCornersFilter;
