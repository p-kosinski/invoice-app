import { KeyboardEvent, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import {
  CalendarCell,
  checkIfCellDateIsSelected,
  datesAreInTheSameMonth,
  getFirstDayOfTheMonth,
  checkIfDatesAreEqual
} from '../../../../utils/dateUtils';

import Typography from '../../Typography/Typography';

import Styled from './Styled';

type Props = {
  rows: CalendarCell[][];
  shownDate: Dayjs;
  setShownDate: (date: Dayjs) => void;
  selectedDate: string;
  onChange: (value: string) => void;
  setCalendarOpen: (open: boolean) => void;
};

const DaysGrid: React.FC<Props> = ({
  rows,
  shownDate,
  setShownDate,
  selectedDate,
  onChange,
  setCalendarOpen
}) => {
  const [focusedDate, setFocusedDate] = useState(dayjs(selectedDate));

  const handleDaysGridFocus = () => () => {
    if(datesAreInTheSameMonth(selectedDate, shownDate)) {
      setFocusedDate(dayjs(selectedDate));
    }  else {
      const firstDayOfTheMonth = getFirstDayOfTheMonth(rows);

      setFocusedDate(dayjs(firstDayOfTheMonth));
    }
  };

  const handleDaysGridKeyDown = () => (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault();
        
        const previousWeek = dayjs(focusedDate).subtract(1, 'week');

        if(!datesAreInTheSameMonth(previousWeek, shownDate)) {
          const previousMonth = dayjs(shownDate).subtract(1, 'month');

          setShownDate(previousMonth);
        }

        setFocusedDate(previousWeek);

        break;
      }
      case 'ArrowDown': {
        e.preventDefault();

        const nextWeek = dayjs(focusedDate).add(1, 'week');

        if(!datesAreInTheSameMonth(nextWeek, shownDate)) {
          const nextMonth = dayjs(shownDate).add(1, 'month');

          setShownDate(nextMonth);
        }

        setFocusedDate(nextWeek);

        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();

        const previousDay = dayjs(focusedDate).subtract(1, 'day');

        if(!datesAreInTheSameMonth(previousDay, shownDate)) {
          const previousMonth = dayjs(shownDate).subtract(1, 'month');

          setShownDate(previousMonth);
        }

        setFocusedDate(previousDay);

        break;
      }
      case 'ArrowRight': {
        e.preventDefault();

        const nextDay = dayjs(focusedDate).add(1, 'day');

        if(!datesAreInTheSameMonth(nextDay, shownDate)) {
          const nextMonth = dayjs(shownDate).add(1, 'month');

          setShownDate(nextMonth);
        }

        setFocusedDate(nextDay);

        break;
      }
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        onChange(dayjs.utc(focusedDate).toISOString());
        setCalendarOpen(false);

        // [TO DO] focus input button
        
        break;
      default:
        break;
    }
  };

  const handleGridCellClick = (value: Dayjs) => {
    onChange(dayjs.utc(value).toISOString());
    setCalendarOpen(false);
  };

  return (
    <Styled.DaysGrid
      tabIndex={0}
      onFocus={handleDaysGridFocus()}
      onKeyDown={handleDaysGridKeyDown()}
    >
      {rows.map((cells, rowIndex) => (
        <Styled.DaysGridRow key={rowIndex}>
          {cells.map(({ text, value, inShownMonth }, columnIndex) => (
            <Styled.DaysGridCell
              key={`${text} - ${columnIndex}`}
              tabIndex={-1}
              $selected={checkIfCellDateIsSelected(value, selectedDate)}
              $focused={checkIfDatesAreEqual(value, focusedDate)}
              $inShownMonth={inShownMonth}
              disabled={!inShownMonth}
              onClick={() => handleGridCellClick(value)}
            >
              <Typography variant='h4' element='span'>
                {text}
              </Typography>
            </Styled.DaysGridCell>
            ))}
          </Styled.DaysGridRow>
      ))}
    </Styled.DaysGrid>
  );
};

export default DaysGrid;
