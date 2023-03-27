import styled from 'styled-components';

export const StyledOptionBlock = styled.div`
  width: 400px;
`;

export const StyledIndicatorBlock = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const StyledScore = styled.div`
  width: 188px;
  padding: 10px 0;
  background-color: ${({ theme }): string => theme.colors.neutral};
  color: ${({ theme }): string => theme.colors.main};
  border: 1px solid ${({ theme }): string => theme.colors.grayBorder};
  border-radius: 10px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  font-family: sans-serif;
  letter-spacing: 1.2px;
`;
