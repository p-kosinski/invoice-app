import { ChangeEvent } from 'react';

import { assertNotNull } from '../../../utils/typeUtils';

import Typography from '../Typography/Typography';

import Styled from './Styled';

type Props = {
  input: 'text' | 'numeric' | 'decimal';
  name: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  required?: boolean;
  invalid?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  showLabelOnlyOnMobile?: boolean;
  value: string;
  onChange: (value: string) => any;
};

const TextField: React.FC<Props> = ({
  input,
  name,
  label,
  ariaLabel,
  placeholder,
  required,
  invalid,
  errorMsg,
  showLabelOnlyOnMobile,
  value,
  onChange
}) => {
  const handleNumericInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    inputValue = inputValue.replace(/^0+/, '');

    onChange(inputValue);
  };

  const handleDecimalInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const start = event.target.selectionStart;
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/([^0-9.]+)/, '');
    inputValue = inputValue.replace(/^(0|\.)/, '');

    const match = /(\d{0,7})[^.]*((?:\.\d{0,2})?)/g.exec(inputValue);

    assertNotNull(match);
    const newValue = match[1] + match[2];
    
    event.target.value = newValue;
    onChange(newValue);
    
    if (inputValue.length > 0) {
      let parsedNewValue = '';

      if (newValue === '.') {
        parsedNewValue = '0.00';
      } else {
        parsedNewValue = Number(newValue).toFixed(2);
      }

      event.target.value = parsedNewValue;
      event.target.setSelectionRange(start, start);
      onChange(parsedNewValue);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.TextWrapper $showLabelOnlyOnMobile={showLabelOnlyOnMobile}>
        <Styled.Label htmlFor={name} $invalid={invalid}>
          <Typography variant='body1' element='span'>
            {label}
          </Typography>
        </Styled.Label>
        {errorMsg &&
          <Styled.ErrorMsg $invalid={invalid}>
            <Typography variant='body1' element='p'>
              {errorMsg}
            </Typography>
          </Styled.ErrorMsg>
        }
      </Styled.TextWrapper>
      {input === 'text' &&
        <>
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
        </>
      }
      {input === 'numeric' &&
        <>
          <Styled.Input
            type='text'
            pattern='[0-9]*'
            inputMode='numeric'
            maxLength={4}
            name={name}
            id={name}
            aria-label={ariaLabel}
            required={required}
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleNumericInputChange(event);
            }}
          />
        </>
      }
      {input === 'decimal' &&
        <>
          <Styled.Input
            type='text'
            pattern='[0-9]+[\.][0-9]{2}'
            inputMode='decimal'
            name={name}
            id={name}
            aria-label={ariaLabel}
            required={required}
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleDecimalInputChange(event);
            }}
          />
        </>
      }
    </Styled.Wrapper>
  );
};

export default TextField;