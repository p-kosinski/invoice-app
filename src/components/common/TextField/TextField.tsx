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
  <Styled.Wrapper>
    <Styled.TextWrapper>
      <Styled.Label htmlFor={name} $invalid={invalid}>
        <Typography variant='body1' element='span'>
          {label}
        </Typography>
      </Styled.Label>
      <Styled.ErrorMsg $invalid={invalid}>
        <Typography variant='body1' element='p'>
          {errorMsg}
        </Typography>
      </Styled.ErrorMsg>
    </Styled.TextWrapper>
    <Styled.Input
      type='text'
      name={name}
      id={name}
      aria-label={ariaLabel}
      aria-invalid={invalid}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </Styled.Wrapper>
);

export default TextField;