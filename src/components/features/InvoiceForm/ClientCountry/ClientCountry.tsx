import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientCountry,
  setClientCountry
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

const ClientCountry: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientCountry: string = useAppSelector(selectClientCountry);
  const invoiceSavingSuccess: boolean =
    useAppSelector(selectInvoiceSavingSuccess);
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const changeClientCountry = (newValue: string) => {
    dispatch(setClientCountry(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    (invoiceSavingSuccess || invoiceDataChangingSuccess) && setValidate(false);
  }, [invoiceSavingSuccess, invoiceDataChangingSuccess]);

  useEffect(() => {
    (!invoicesDrawerOpen || !invoiceDrawerOpen) && setValidate(false);
  }, [invoicesDrawerOpen, invoiceDrawerOpen]);

  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='client-country'
        label='Country'
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
        value={clientCountry}
        onChange={changeClientCountry}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientCountry.length}
      />
    </Styled.CountryWrapper>
  );
};

export default ClientCountry;