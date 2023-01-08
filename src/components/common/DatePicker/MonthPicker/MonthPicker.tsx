import { KeyboardEvent, MouseEvent } from 'react';
import { Dayjs } from 'dayjs';

import { changeDateMonth } from '../../../../utils/dateUtils';

import Typography from '../../Typography/Typography';

import { ReactComponent as LeftArrowIcon } from '../../../../assets/icon-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '../../../../assets/icon-arrow-right.svg';

import Styled from './Styled';

type Props = {
  shownDate: Dayjs;
  setShownDate: (shownDate: Dayjs) => void;
  getShownDateString: () => string;
};

const MonthPicker: React.FC<Props> = ({
  shownDate,
  setShownDate,
  getShownDateString
}) => {
  const handleMonthPickerKeyDown = () => (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowLeft':
        setShownDate(changeDateMonth(shownDate, false));
        break;
      case 'ArrowRight':
        setShownDate(changeDateMonth(shownDate, true));
        break;
      default:
        break;
    }
  };

  const handleArrowClick = (isNextMonth: boolean) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShownDate(changeDateMonth(shownDate, isNextMonth));
  };

  return (
    <Styled.MonthPicker
      tabIndex={0}
      onKeyDown={handleMonthPickerKeyDown()}
    >
      <Styled.MonthPickerButton
        tabIndex={-1}
        onClick={handleArrowClick(false)}
      >
        <LeftArrowIcon /> 
      </Styled.MonthPickerButton>
      <Typography variant='h4' element='span'>
        {getShownDateString()}
      </Typography>
      <Styled.MonthPickerButton
        tabIndex={-1}
        onClick={handleArrowClick(true)}
      >
        <RightArrowIcon />
      </Styled.MonthPickerButton>
    </Styled.MonthPicker>
  );
};

export default MonthPicker;