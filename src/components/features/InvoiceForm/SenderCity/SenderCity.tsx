import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderCity,
  setSenderCity
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderCity: string = useAppSelector(selectSenderCity);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const changeSenderCity = (newValue: string) => {
    dispatch(setSenderCity(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  useEffect(() => {
    !drawerOpen && setValidate(false);
  }, [drawerOpen]);
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='sender-city'
        label='City'
        value={senderCity}
        onChange={changeSenderCity}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !senderCity.length}
      />
    </Styled.CityWrapper>
  );
};

export default SenderCity;