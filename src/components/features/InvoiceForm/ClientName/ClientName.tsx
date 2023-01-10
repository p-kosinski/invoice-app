import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientName,
  setClientName
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

const ClientName: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientName: string = useAppSelector(selectClientName);
  const invoiceSavingSuccess: boolean =
    useAppSelector(selectInvoiceSavingSuccess);
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const changeClientName = (newValue: string) => {
    dispatch(setClientName(newValue));
  };

  const [validate, setValidate] = useState<boolean>(false);

  useEffect(() => {
    (invoiceSavingSuccess || invoiceDataChangingSuccess) && setValidate(false);
  }, [invoiceSavingSuccess, invoiceDataChangingSuccess]);

  useEffect(() => {
    (!invoicesDrawerOpen || !invoiceDrawerOpen) && setValidate(false);
  }, [invoicesDrawerOpen, invoiceDrawerOpen]);
  
  return (
    <Styled.NameWrapper>
      <TextField
        input='text'
        name='client-name'
        label={`Client's Name`}
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
        value={clientName}
        onChange={changeClientName}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientName.length}
        errorMsg={`can't be empty`}
      />
    </Styled.NameWrapper>
  );
};

export default ClientName;