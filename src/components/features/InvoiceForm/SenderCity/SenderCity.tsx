import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderCity,
  setSenderCity
} from '../../../../redux/invoiceFormSlice';

import {
  selectInvoiceSavingSuccess,
  selectInvoiceDataChangingSuccess
} from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';
import {
  selectDrawerOpen as selectInvoicesDrawerOpen
} from '../../../../redux/invoicesViewSlice';
import {
  selectDrawerOpen as selectInvoiceDrawerOpen
} from '../../../../redux/invoiceViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderCity: string = useAppSelector(selectSenderCity);
  const invoiceSavingSuccess: boolean =
    useAppSelector(selectInvoiceSavingSuccess);
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const changeSenderCity = (newValue: string) => {
    dispatch(setSenderCity(newValue));
  };

  const [validate, setValidate] = useState<boolean>(false);

  useEffect(() => {
    (invoiceSavingSuccess || invoiceDataChangingSuccess) && setValidate(false);
  }, [invoiceSavingSuccess, invoiceDataChangingSuccess]);

  useEffect(() => {
    (!invoicesDrawerOpen || !invoiceDrawerOpen) && setValidate(false);
  }, [invoicesDrawerOpen, invoiceDrawerOpen]);
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='sender-city'
        label='City'
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
        value={senderCity}
        onChange={changeSenderCity}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !senderCity.length}
      />
    </Styled.CityWrapper>
  );
};

export default SenderCity;