import { useState, useEffect, KeyboardEvent, useRef } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import Label from '../Label/Label';

import {
  ReactComponent as ArrowDownIcon
} from '../../../assets/icon-arrow-down.svg';

import Styled from './Styled';

type Option = {
  value: number;
  label: string;
}

interface Props {
  name: string;
  label: string;
  ariaLabel?: string;
  buttonTabIndex?: number;
  options: Option[];
  defaultOptionValue?: number;
  selectedValue: number;
  onChange: (value: number) => void;
}

const Select: React.FC<Props> = ({
  name,
  label,
  ariaLabel,
  buttonTabIndex,
  options,
  defaultOptionValue,
  selectedValue,
  onChange,
}) => {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const selectButton = useRef<HTMLButtonElement>(null);

  const findOptionIndex = (value: number): number => {
    const optionIndex = options.findIndex((optionObject) => {
      return optionObject.value === value;
    });

    return optionIndex;
  };

  useEffect(() => {
    if (defaultOptionValue) {
      const defaultOptionIndex = findOptionIndex(defaultOptionValue);

      setSelectedOptionIndex(defaultOptionIndex);
      onChange(defaultOptionValue);
    }
  }, [defaultOptionValue]);

  useEffect(() => {
    const optionIndex = findOptionIndex(selectedValue);

    setSelectedOptionIndex(optionIndex)
  }, [selectedValue]);

  const handleOptionClick = (i: number, clickedValue: number) => () => {
    onChange(clickedValue);
    setSelectedOptionIndex(i);
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
          setSelectedOptionIndex(i);
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
        <Label htmlFor={name} text={label} />
        <Styled.Select
          tabIndex={buttonTabIndex}
          role='button'
          id={name}
          aria-label={ariaLabel}
          aria-haspopup='listbox'
          aria-expanded={optionsOpen}
          ref={selectButton}
          onClick={(e) => {
            e.preventDefault();
            setOptionsOpen(!optionsOpen);
          }}
        >
          <Styled.SelectWrapper>
            {options[selectedOptionIndex].label}
            <ArrowDownIcon />
          </Styled.SelectWrapper>
          <Styled.OptionsList
            aria-hidden={!optionsOpen}
            role='listbox'
            aria-activedescendant={
              options[selectedOptionIndex].value.toString()
            }
            tabIndex={-1}
            $visible={optionsOpen}
          >
            {options.map((option, i) => (
              <Styled.Option
                key={i}
                id={option.value.toString()}
                tabIndex={0}
                role='option'
                aria-selected={selectedOptionIndex === i}
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
