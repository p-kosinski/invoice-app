import { useCallback, useState, useRef } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { parseDateToLocaleString } from '../../../utils/dateUtils';

import Typography from '../Typography/Typography';
import Calendar from './Calendar/Calendar';

import { ReactComponent as CalendarIcon } from '../../../assets/icon-calendar.svg';

import Styled from './Styled';

type Props = {
  name: string;
  label: string;
  disabled?: boolean | undefined;
  selectedDate: string;
  onChange: (value: string) => void;
};

const DatePicker: React.FC<Props> = ({
  name,
  label,
  disabled,
  selectedDate,
  onChange
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const inputButtonRef = useRef<HTMLButtonElement | null>(null);

  const getSelectedDateString = useCallback(() => {
    return parseDateToLocaleString(selectedDate);
  }, [selectedDate]);

  return (
    <ClickAwayListener onClickAway={() => setCalendarOpen(false)}>
      <Styled.Wrapper>
        <Styled.Label id={name} htmlFor={name}>
          <Typography variant='body1' element='span'>
            {label}
          </Typography>
        </Styled.Label>
        <Styled.Input
          id={name}
          name={name}
          aria-label={label}
          aria-haspopup='true'
          aria-expanded={calendarOpen}
          disabled={disabled}
          onClick={() => setCalendarOpen(!calendarOpen)}
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

export default DatePicker;