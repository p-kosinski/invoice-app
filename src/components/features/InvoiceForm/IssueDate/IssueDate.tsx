import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectIssueDate,
  setIssueDate
} from '../../../../redux/invoiceFormSlice';

import DatePicker from '../../../common/DatePicker/DatePicker';

import Styled from '../Styled';

const IssueDate: React.FC = () => {
  const dispatch = useAppDispatch();

  const date: string = useAppSelector(selectIssueDate);

  const changeDate = (newValue: string) => {
    dispatch(setIssueDate(newValue));
  };

  useEffect(() => {
    changeDate(dayjs.utc().toISOString());
  }, []);
  
  return (
    <Styled.DateWrapper>
      <DatePicker
        name='invoice-date'
        label='Invoice Date'
        selectedDate={date}
        onChange={changeDate}
      />
    </Styled.DateWrapper>
  );
};

export default IssueDate;