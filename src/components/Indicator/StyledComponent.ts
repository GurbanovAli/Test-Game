import styled from 'styled-components';

export const StyledBlock = styled.div`
  background-color: ${({ theme }): string => theme.colors.neutral2};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  text-align: center;
`;

export const StyledText = styled.p`
  margin: 2px 0;
  color: ${({ theme }): string => theme.colors.main};
  font-size: 12px;
  letter-spacing: 1px;
`;

export const StyledIndicatorBlock = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledInput = styled.input`
  width: 80px;
  height: 26px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }): string => theme.colors.neutral};
  color: ${({ theme }): string => theme.colors.main};
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
