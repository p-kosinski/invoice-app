import { useState, useEffect, KeyboardEvent, useRef } from 'react';

import Typography from '../Typography/Typography';

import { ReactComponent as ArrowDownIcon } from '../../../assets/icon-arrow-down.svg';

import Styled from './Styled';

type Option = {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label?: string;
  ariaLabel?: string;
  options: Option[];
  defaultOptionValue: string;
  onChange: (value: string) => void;
}

const Select: React.FC<Props> = ({
  name,
  label,
  ariaLabel,
  options,
  defaultOptionValue,
  onChange,
}) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const selectButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const defaultOptionIndex = options.findIndex((object) => {
      return object.value === defaultOptionValue;
    });

    setSelectedOption(defaultOptionIndex);
    onChange(defaultOptionValue);
  }, []);

  const toggleOptions = () => {
    setOptionsOpen(!optionsOpen);
  };

  const handleOptionClick = (i: number, clickedValue: string) => () => {
    onChange(clickedValue);
    setSelectedOption(i);
    setOptionsOpen(false);
  };

  const handleOptionKeyDown =
    (i: number, clickedValue: string) => (e: KeyboardEvent<HTMLLIElement>) => {
      switch (e.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          e.preventDefault();
          onChange(clickedValue);
          setSelectedOption(i);
          setOptionsOpen(false);
          selectButton.current && selectButton.current.focus();
          break;
        default:
          break;
      }
    };

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>
        <Typography variant='body1' element='span'>
          {label}
        </Typography>
      </Styled.Label>
      <Styled.Select
        tabIndex={0}
        role='button'
        id={name}
        aria-label={ariaLabel}
        aria-haspopup='listbox'
        aria-expanded={optionsOpen}
        ref={selectButton}
        onClick={toggleOptions}
      >
        <Styled.SelectWrapper>
          {options[selectedOption].label}
          <ArrowDownIcon />
        </Styled.SelectWrapper>
        <Styled.OptionsList
          aria-hidden={!optionsOpen}
          role='listbox'
          aria-activedescendant={options[selectedOption].value}
          tabIndex={-1}
          $visible={optionsOpen}
        >
          {options.map((option, i) => (
            <Styled.Option
              key={i}
              id={option.value}
              tabIndex={0}
              role='option'
              aria-selected={selectedOption === i}
              onClick={handleOptionClick(i, option.value)}
              onKeyDown={handleOptionKeyDown(i, option.value)}
            >
              {option.label}
            </Styled.Option>
          ))}
        </Styled.OptionsList>
      </Styled.Select>
    </Styled.Wrapper>
  );
};

export default Select;
