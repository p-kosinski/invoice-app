import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientPostCode,
  setClientPostCode
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

const ClientPostCode: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientPostCode: string = useAppSelector(selectClientPostCode);
  const invoiceSavingSuccess: boolean =
    useAppSelector(selectInvoiceSavingSuccess);
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const changeClientPostCode = (newValue: string) => {
    dispatch(setClientPostCode(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    (invoiceSavingSuccess || invoiceDataChangingSuccess) && setValidate(false);
  }, [invoiceSavingSuccess, invoiceDataChangingSuccess]);

  useEffect(() => {
    (!invoicesDrawerOpen || !invoiceDrawerOpen) && setValidate(false);
  }, [invoicesDrawerOpen, invoiceDrawerOpen]);
  
  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='client-post-code'
        label='Post Code'
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
        value={clientPostCode}
        onChange={changeClientPostCode}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientPostCode.length}
      />
    </Styled.PostCodeWrapper>
  );
};

export default ClientPostCode;