import {
  useCallback,
  useState,
  useRef,
  MouseEvent
} from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { parseDateToLocaleString } from '../../../utils/dateUtils';

import Calendar from './Calendar/Calendar';
import Label from '../Label/Label';

import { ReactComponent as CalendarIcon } from '../../../assets/icon-calendar.svg';

import Styled from './Styled';

type Props = {
  name: string;
  label: string;
  buttonTabIndex?: number;
  disabled?: boolean | undefined;
  selectedDate: string;
  onChange: (value: string) => void;
};

const DatePicker: React.FC<Props> = ({
  name,
  label,
  buttonTabIndex,
  disabled,
  selectedDate,
  onChange
}) => {
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

  const inputButtonRef = useRef<HTMLButtonElement | null>(null);

  const getSelectedDateString = useCallback(() => {
    return parseDateToLocaleString(selectedDate);
  }, [selectedDate]);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(e.currentTarget.id === document.activeElement?.id) {
      setCalendarOpen(!calendarOpen);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setCalendarOpen(false)}>
      <Styled.Wrapper>
        <Label htmlFor={name} text={label} />
        <Styled.Input
          id={name}
          name={name}
          tabIndex={buttonTabIndex}
          aria-label={label}
          aria-haspopup='true'
          aria-expanded={calendarOpen}
          disabled={disabled}
          onClick={(e) => handleButtonClick(e)}
          ref={inputButtonRef}
        >
          <Styled.InputWrapper>
            <Styled.DateWrapper $disabled={disabled}>
              {getSelectedDateString()}
            </Styled.DateWrapper>
            <CalendarIcon />
          </Styled.InputWrapper>
        </Styled.Input>
        <Calendar
          calendarOpen={calendarOpen}
          setCalendarOpen={setCalendarOpen}
          selectedDate={selectedDate}
          onChange={onChange}
          ref={inputButtonRef}
        />
      </Styled.Wrapper>
    </ClickAwayListener>
  );
};

DatePicker.defaultProps = {
  buttonTabIndex: 0,
};

export default DatePicker;