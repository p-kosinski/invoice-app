import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import { parseDateToLocaleString } from '../../../../utils/dateUtils';

import DatePicker from '../../../common/DatePicker/DatePicker';

import Styled from '../Styled';

const IssueDate: React.FC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(parseDateToLocaleString(dayjs.utc()));
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