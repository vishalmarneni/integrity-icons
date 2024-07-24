import React from 'react';
import { ReactSVG } from 'react-svg';
import svg from './locationPin.svg';

type IconSize = 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

type IconProps = {
  className?: string;
  color: string;
  size: IconSize;
};

const BaseSize = 24

const sizes: Record<IconSize, {width: string; height: string}> = {
  xsm: {
    width: BaseSize / 2.4 + 'px',
    height: BaseSize / 2.4 + 'px',
  },
  sm: {
    width: BaseSize / 2 + 'px',
    height: BaseSize / 2 + 'px',
  },
  md: {
    width: BaseSize + 'px',
    height: BaseSize + 'px',
  },
  lg: {
    width: BaseSize * 1.5 + 'px',
    height: BaseSize * 1.5 + 'px',
  },
  xl: {
    width: BaseSize * 2 + 'px',
    height: BaseSize * 2 + 'px',
  },
  '2xl': {
    width: BaseSize * 2.5 + 'px',
    height: BaseSize * 2.5 + 'px',
  },
  '3xl': {
    width: BaseSize * 3 + 'px',
    height: BaseSize * 3 + 'px',
  }
}

export const LocationPin: React.FC<IconProps> = ({ color = '#4178ff', className, size = 'md' }) => (
    <ReactSVG color={color} src={svg} className={`icon ${className}`} afterInjection={(svg) => {
      svg.setAttribute('height', sizes[size].height)
      svg.setAttribute('width', sizes[size].width)
      svg.setAttribute('color', color)
    }} />
);