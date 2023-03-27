import styled from 'styled-components';
import { ButtonDirectionType } from './types';

export const StyledButton = styled.button`
  width: 400px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid;
  background-color: ${({ theme }): string => theme.colors.neutral};
  border-color: ${({ theme }): string => theme.colors.grayBorder};
  color: ${({ theme }): string => theme.colors.main};
  font-size: 22px;
  font-weight: 600;
  font-family: sans-serif;
  letter-spacing: 1.2px;
  cursor: pointer;
  transition: background-color, border-color;
`;

export const StyledArrowButton = styled.button<{
  width: number;
  height: number;
  direction: ButtonDirectionType;
}>`
  width: ${(props): string => `${props.width}px`};
  height: ${(props): string => `${props.height}px`};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }): string => theme.colors.neutral};
  border: 1px solid ${({ theme }): string => theme.colors.grayBorder};

  svg {
    ${(props): string =>
      ({
        [ButtonDirectionType.TOP]: 'transform: rotate(0deg)',
        [ButtonDirectionType.BOTTOM]: 'transform: rotate(180deg)',
      }[props.direction])}
  }
`;
