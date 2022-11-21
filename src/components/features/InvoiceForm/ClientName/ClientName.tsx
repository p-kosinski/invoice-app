import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientName,
  setClientName
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientName: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientName: string = useAppSelector(selectClientName);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const changeClientName = (newValue: string) => {
    dispatch(setClientName(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);
  
  return (
    <Styled.NameWrapper>
      <TextField
        input='text'
        name='client-name'
        label={`Client's Name`}
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