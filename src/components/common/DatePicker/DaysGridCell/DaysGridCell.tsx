import { KeyboardEvent, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import { CalendarCell, checkIfCellDateIsSelected } from '../../../../utils/dateUtils';

import Typography from '../../Typography/Typography';

import Styled from './Styled';

type KeyDownEvent = KeyboardEvent<HTMLDivElement> | KeyboardEvent<HTMLButtonElement>;

export type FocusedCell = [
  number, // rowIndex
  number // columnIndex
];

interface Props {
  rows: CalendarCell[][];
  rowIndex: number;
  columnIndex: number;
  inShownMonth: boolean;
  text: string;
  value: Dayjs;
  focusedCell: FocusedCell;
  selectedDate: string;
  onChange: (value: string) => void;
  setCalendarOpen: (open: boolean) => void;
  handleKeyDown: () => (e: KeyDownEvent) => void;
};

const DaysGridCell: React.FC<Props> = ({
  rows,
  rowIndex,
  columnIndex,
  inShownMonth,
  text,
  value,
  focusedCell,
  selectedDate,
  onChange,
  setCalendarOpen,
  handleKeyDown
}) => {
  /* [TO DO] use useEffect to set focus (if focusedCell = [rowIndex, cellIndex]) */
  
  /* ARROW KEYS FOCUS IMPLEMENTATION IS NOT WORKING ! */

  const gridCellButton = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if(focusedCell[0] === rowIndex && focusedCell[1] === columnIndex) {
      gridCellButton.current && gridCellButton.current.focus();
    }
  }, [focusedCell]);

  return (
    <Styled.DaysGridCell
      key={`${text} - ${columnIndex}`}
      tabIndex={0}
      $selected={checkIfCellDateIsSelected(value, selectedDate)}
      $inShownMonth={inShownMonth}
      disabled={!inShownMonth}
      onClick={() => {
        onChange(dayjs.utc(value).toISOString());
        setCalendarOpen(false);
      }}
      onKeyDown={handleKeyDown()}
      ref={gridCellButton}
    >
      <Typography variant='h4' element='span'>
        {text}
      </Typography>
    </Styled.DaysGridCell>
  );
};

export default DaysGridCell;