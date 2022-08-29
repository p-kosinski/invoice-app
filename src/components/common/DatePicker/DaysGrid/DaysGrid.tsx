import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import {
  checkIfCellDateIsSelected,
  CalendarCell,
} from '../../../../utils/dateUtils';

import Typography from '../../Typography/Typography';

import Styled from './Styled';

type Props = {
  rows: CalendarCell[][];
  selectedDate: string;
  onChange: (value: string) => void;
  setCalendarOpen: (open: boolean) => void;
};

const DaysGrid: React.FC<Props> = ({
  rows,
  selectedDate,
  onChange,
  setCalendarOpen,
}) => {
  return (
    <Styled.DaysGrid>
      {rows.map((cells, rowIndex) => (
        <Styled.DaysGridRow key={rowIndex}>
          {cells.map(({ text, value, inShownMonth }, cellIndex) => (
            <Styled.DaysGridCell
              key={`${text} - ${cellIndex}`}
              tabIndex={0}
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
            </Styled.DaysGridCell>
          ))}
        </Styled.DaysGridRow>
      ))}
    </Styled.DaysGrid>
  );
};

export default DaysGrid;
