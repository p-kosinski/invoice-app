import dayjs, { Dayjs } from 'dayjs';

export const changeDateMonth = (date: Dayjs, isNextMonth: boolean): Dayjs => {
  if (date.month() === 0 && !isNextMonth) {
    return date.set('year', date.year() - 1).set('month', 11);
  }

  if (date.month() === 11 && isNextMonth) {
    return date.set('year', date.year() + 1).set('month', 0);
  }

  return date.add(isNextMonth ? 1 : -1, 'month');
}

export interface CalendarCell {
  text: string;
  value: Dayjs;
  inShownMonth: boolean;
};

const getCalendarCells = (date: Dayjs): CalendarCell[] => {
  const daysInMonth = date.daysInMonth();
  const calendarCells: CalendarCell[] = [];

  const prepareCell = (date: Dayjs, dayNumber: number, inShownMonth: boolean) => {
    return {
      text: String(dayNumber),
      value: date.clone().set('date', dayNumber),
      inShownMonth: inShownMonth
    };
  };

  for (let i = 0; i < daysInMonth; i++) {
    calendarCells.push(prepareCell(date, i + 1, true));
  }

  const cellsToAdd = 35 - daysInMonth;

  const lastMonth = date.subtract(1, 'month');

  for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
    calendarCells.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i, false));
  }

  const nextMonth = date.add(1, 'month');

  for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
    calendarCells.push(prepareCell(nextMonth, i + 1, false));
  }

  return calendarCells;
};

export const getCalendarRows = (date: Dayjs): Array<CalendarCell[]> => {
  const cells = getCalendarCells(date);
  const rows: Array<CalendarCell[]> = [];

  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return rows;
}

export const checkIfCellDateIsSelected = (
  cellDate: Dayjs,
  selectedDate: string
): boolean => {
  const cellDateString = dayjs(cellDate).format('DD-MM-YYYY');
  const selectedDateString = dayjs(selectedDate).local().format('DD-MM-YYYY');
  
  return cellDateString === selectedDateString;
};