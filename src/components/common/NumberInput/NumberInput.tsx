import Styled from './Styled';

type Props = {
  name: string;
  ariaLabel?: string;
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  max?: number;
  min?: number;
  step?: string;
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
  step,
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
      step={step}
      value={value}
      onChange={(event) => onChange(parseFloat(event.target.value))}
    />
  </>
);

export default NumberInput;