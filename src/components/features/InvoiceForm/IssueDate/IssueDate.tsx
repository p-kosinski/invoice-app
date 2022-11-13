import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormIssueDate,
  setFormIssueDate
} from '../../../../redux/invoicesViewSlice';

import DatePicker from '../../../common/DatePicker/DatePicker';

import Styled from '../Styled';

const IssueDate: React.FC = () => {
  const dispatch = useAppDispatch();

  const date: string = useAppSelector(selectFormIssueDate);

  const setDate = (newValue: string) => {
    dispatch(setFormIssueDate(newValue));
  };

  useEffect(() => {
    setDate(dayjs.utc().toISOString());
  }, []);
  
  return (
    <Styled.DateWrapper>
      <DatePicker
        name='invoice-date'
        label='Invoice Date'
        selectedDate={date}
        onChange={setDate}
      />
    </Styled.DateWrapper>
  );
};

export default IssueDate;