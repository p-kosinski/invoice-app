import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientEmail,
  setClientEmail
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientEmail: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientEmail: string = useAppSelector(selectClientEmail);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const changeClientEmail = (newValue: string) => {
    dispatch(setClientEmail(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);
  
  return (
    <Styled.EmailWrapper>
      <TextField
        input='text'
        name='client-email'
        label={`Client's Email`}
        value={clientEmail}
        onChange={changeClientEmail}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientEmail.length}
        errorMsg={`can't be empty`}
      />
    </Styled.EmailWrapper>
  );
};

export default ClientEmail;