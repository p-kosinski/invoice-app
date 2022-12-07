import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientCity,
  setClientCity
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

const ClientCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientCity: string = useAppSelector(selectClientCity);
  const invoiceSavingSuccess: boolean =
    useAppSelector(selectInvoiceSavingSuccess);
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const changeClientCity = (newValue: string) => {
    dispatch(setClientCity(newValue));
  };

  const [validate, setValidate] = useState(false);

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
        name='client-city'
        label='City'
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
        value={clientCity}
        onChange={changeClientCity}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientCity.length}
      />
    </Styled.CityWrapper>
  );
};

export default ClientCity;