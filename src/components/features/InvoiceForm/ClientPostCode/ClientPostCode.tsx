import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientPostCode,
  setClientPostCode
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientPostCode: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientPostCode: string = useAppSelector(selectClientPostCode);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const changeClientPostCode = (newValue: string) => {
    dispatch(setClientPostCode(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);
  
  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='client-post-code'
        label='Post Code'
        value={clientPostCode}
        onChange={changeClientPostCode}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientPostCode.length}
      />
    </Styled.PostCodeWrapper>
  );
};

export default ClientPostCode;