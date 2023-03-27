import React, { useCallback, useState } from 'react';
import {
  StyledBlock,
  StyledIndicatorBlock,
  StyledInput,
  StyledText,
} from './StyledComponent';
import { ArrowButton } from '../Button/ArrowButton';
import { ButtonDirectionType } from '../Button/types';

type PropsType = {
  text: string;
  increment: number;
  decrement: number;
  sum: string | number;
  onClick: (sum: number) => { payload: number; type: string } | void;
  min: number;
  max?: number;
};

const Indicator = ({
  text,
  increment,
  decrement,
  sum,
  onClick,
  min,
  max,
}: PropsType): JSX.Element => {
  const [value, setValue] = useState<string | number>(sum);

  const onChange = useCallback(
    (e: { target: { value: React.SetStateAction<string | number> } }) => {
      setValue(e.target.value);
      onClick(+e.target.value);
    },
    []
  );

  const onCount = useCallback((count: number) => {
    onClick(count);
    setValue(parseFloat(`${count}`).toFixed(2));
  }, []);

  return (
    <StyledBlock>
      <StyledText>{text}</StyledText>
      <StyledIndicatorBlock>
        <ArrowButton
          onClick={() => onCount(min < increment ? increment : min)}
          direction={ButtonDirectionType.BOTTOM}
        />
        <StyledInput value={value} onChange={(e) => onChange(e)} />
        <ArrowButton
          onClick={() => onCount(max && max <= decrement ? max : decrement)}
        />
      </StyledIndicatorBlock>
    </StyledBlock>
  );
};

export default Indicator;
