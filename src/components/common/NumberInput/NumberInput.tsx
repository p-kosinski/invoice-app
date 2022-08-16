import { useEffect } from 'react';
import Styled from './Styled';

type Props = {
  name: string;
  ariaLabel?: string;
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  max?: number;
  min?: number;
  value: number;
  onChange: (value: number) => any;
};

const NumberInput: React.FC<Props> = ({
  name,
  ariaLabel,
  required,
  invalid,
  max,
  min,
  value,
  onChange
}) => (
  <>
    <Styled.Input
      type='number'
      name={name}
      id={name}
      aria-label={ariaLabel}
      aria-invalid={invalid}
      required={required}
      max={max}
      min={min}
      value={value}
      onChange={(event) => onChange(parseInt(event.target.value))}
    />
  </>
);

export default NumberInput;