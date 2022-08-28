import { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import ClickAwayListener from 'react-click-away-listener';

import {
  changeDateMonth,
  getCalendarRows,
  checkIfCellDateIsSelected
} from '../../../utils/dateUtils';

import Typography from '../Typography/Typography';

import { ReactComponent as CalendarIcon } from '../../../assets/icon-calendar.svg';
import { ReactComponent as LeftArrowIcon } from '../../../assets/icon-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '../../../assets/icon-arrow-right.svg';

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
  const [shownDate, setShownDate] = useState(dayjs(selectedDate));

  useEffect(() => {
    setShownDate(dayjs(selectedDate));
  }, [selectedDate]);

  const handleArrowClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);
  
  const getSelectedDateString = useCallback(() => {
    return dayjs(selectedDate).format('DD MMM YYYY');
  }, [selectedDate]);

  const getShownDateString = useCallback(() => {
    return shownDate.format('MMM YYYY');
  }, [shownDate]);

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
        >
          <Styled.InputWrapper>
            <Styled.DateWrapper $disabled={disabled}>
              {getSelectedDateString()}
            </Styled.DateWrapper>
            <CalendarIcon />
          </Styled.InputWrapper>
        </Styled.Input>
        <Styled.PopupCard
          aria-hidden={!calendarOpen}
          $visible={calendarOpen}
        >
          <Styled.MonthPicker>
            <Styled.MonthPickerButton onClick={handleArrowClick(false)}>
              <LeftArrowIcon />
            </Styled.MonthPickerButton>
            <Typography variant='h4' element='span'>
              {getShownDateString()}
            </Typography>
            <Styled.MonthPickerButton onClick={handleArrowClick(true)}>
              <RightArrowIcon />
            </Styled.MonthPickerButton>
          </Styled.MonthPicker>
          <Styled.Calendar>
            {rows.map((cells, rowIndex) => (
              <Styled.CalendarRow key={rowIndex}>
                {cells.map(({ text, value, inShownMonth }, cellIndex) => (
                  <Styled.CalendarCell
                    key={`${text} - ${cellIndex}`}
                    $selected={checkIfCellDateIsSelected(value, selectedDate)}
                    $inShownMonth={inShownMonth}
                    disabled={!inShownMonth}
                    onClick={() => {
                      onChange(dayjs.utc(value).toISOString());
                      setCalendarOpen(false);
                    }}
                  >
                    <Typography variant='h4' element='span'>
                      {text}
                    </Typography>
                  </Styled.CalendarCell>
                ))}
              </Styled.CalendarRow>
            ))}
          </Styled.Calendar>
        </Styled.PopupCard>
      </Styled.Wrapper>
    </ClickAwayListener>
  );
};

export default DatePicker;