import styled from 'styled-components';

export const StyledCanvasWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }): string => theme.colors.canvasString};
  border: 1px solid ${({ theme }): string => theme.colors.grayBorder};
`;
