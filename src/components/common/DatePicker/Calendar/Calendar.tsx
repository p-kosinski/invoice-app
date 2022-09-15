import { useState, useEffect, useMemo, useCallback, forwardRef } from 'react';
import dayjs from 'dayjs';

import { getCalendarRows } from '../../../../utils/dateUtils';

import MonthPicker from '../MonthPicker/MonthPicker';
import DaysGrid from '../DaysGrid/DaysGrid';

import Styled from './Styled';

type Props = {
  calendarOpen: boolean;
  setCalendarOpen: (open: boolean) => void;
  selectedDate: string;
  onChange: (value: string) => void;
};

type Ref = HTMLButtonElement;

const Calendar = forwardRef<Ref, Props>(({
  calendarOpen,
  setCalendarOpen,
  selectedDate,
  onChange
}, ref) => {
  const [shownDate, setShownDate] = useState(dayjs(selectedDate));

  useEffect(() => {
    setShownDate(dayjs(selectedDate));
  }, [selectedDate]);

  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);

  const getShownDateString = useCallback(() => {
    return shownDate.format('MMM YYYY');
  }, [shownDate]);

  return (
    <Styled.Calendar
      aria-hidden={!calendarOpen}
      $visible={calendarOpen}
    >
      <MonthPicker
        shownDate={shownDate}
        setShownDate={setShownDate}
        getShownDateString={getShownDateString}
      />
      <DaysGrid
        rows={rows}
        shownDate={shownDate}
        setShownDate={setShownDate}
        selectedDate={selectedDate}
        onChange={onChange}
        setCalendarOpen={setCalendarOpen}
        inputRef={ref}
      />
    </Styled.Calendar>
  );
});

export default Calendar;