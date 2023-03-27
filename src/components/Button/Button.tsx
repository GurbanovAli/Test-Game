import React from 'react';
import { StyledButton } from './StyledComponent';

type PropsType = {
  type: 'button' | 'submit' | 'reset';
  text: string;
  onClick: () => void;
};

const Button = ({ type, text, onClick }: PropsType): JSX.Element => (
  <StyledButton type={type} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
