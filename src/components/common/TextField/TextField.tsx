import Typography from '../Typography/Typography';
import Styled from './Styled';

type Props = {
  name: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  required?: boolean;
  invalid?: boolean;
  errorMsg: string;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => any;
};

const TextField: React.FC<Props> = ({
  name,
  label,
  ariaLabel,
  placeholder,
  required,
  invalid,
  errorMsg,
  value,
  onChange
}) => (
  <Styled.Label $invalid={invalid}>
    <Typography variant='body1' element='span'>
      {label}
    </Typography>
    <Styled.Input
      type='text'
      name={name}
      aria-label={ariaLabel}
      aria-invalid={invalid}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </Styled.Label>
);

export default TextField;