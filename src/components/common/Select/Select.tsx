import { useState, useEffect, KeyboardEvent, useRef } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import Typography from '../Typography/Typography';

import { ReactComponent as ArrowDownIcon } from '../../../assets/icon-arrow-down.svg';

import Styled from './Styled';

type Option = {
  value: number;
  label: string;
}

interface Props {
  name: string;
  label?: string;
  buttonTabIndex?: number;
  options: Option[];
  defaultOptionValue: number;
  onChange: (value: number) => void;
}

const Select: React.FC<Props> = ({
  name,
  label,
  buttonTabIndex,
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

  const handleOptionClick = (i: number, clickedValue: number) => () => {
    onChange(clickedValue);
    setSelectedOption(i);
    setOptionsOpen(false);
  };

  const handleOptionKeyDown =
    (i: number, clickedValue: number) => (e: KeyboardEvent<HTMLLIElement>) => {
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
    <ClickAwayListener onClickAway={() => setOptionsOpen(false)}>
      <Styled.Wrapper>
        <Styled.Label htmlFor={name}>
          <Typography variant='body1' element='span'>
            {label}
          </Typography>
        </Styled.Label>
        <Styled.Select
          tabIndex={buttonTabIndex}
          role='button'
          id={name}
          aria-label={`${label} - ${options[selectedOption].label}`}
          aria-haspopup='listbox'
          aria-expanded={optionsOpen}
          ref={selectButton}
          onClick={(e) => {
            e.preventDefault();
            setOptionsOpen(!optionsOpen);
          }}
        >
          <Styled.SelectWrapper>
            {options[selectedOption].label}
            <ArrowDownIcon />
          </Styled.SelectWrapper>
          <Styled.OptionsList
            aria-hidden={!optionsOpen}
            role='listbox'
            aria-activedescendant={options[selectedOption].value.toString()}
            tabIndex={-1}
            $visible={optionsOpen}
          >
            {options.map((option, i) => (
              <Styled.Option
                key={i}
                id={option.value.toString()}
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
    </ClickAwayListener>
  );
};

Select.defaultProps = {
  buttonTabIndex: 0,
};

export default Select;
