import React from 'react';

import { ButtonDirectionType } from './types';
import { StyledArrowButton } from './StyledComponent';
import ArrowIcon from '../../assets/ArrowIcon';
import { ButtonType } from '../../types';

type PropsType = {
  onClick: () => void;
  width?: number;
  height?: number;
  direction?: ButtonDirectionType;
};

export const ArrowButton = ({
  onClick,
  width = 28,
  height = 28,
  direction = ButtonDirectionType.TOP,
}: PropsType): JSX.Element => (
  <StyledArrowButton
    type={ButtonType.Button}
    width={width}
    height={height}
    direction={direction}
    onClick={onClick}
  >
    <ArrowIcon />
  </StyledArrowButton>
);
