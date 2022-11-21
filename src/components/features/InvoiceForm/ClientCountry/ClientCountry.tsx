import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientCountry,
  setClientCountry
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientCountry: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientCountry: string = useAppSelector(selectClientCountry);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const changeClientCountry = (newValue: string) => {
    dispatch(setClientCountry(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);
  
  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='client-country'
        label='Country'
        value={clientCountry}
        onChange={changeClientCountry}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientCountry.length}
      />
    </Styled.CountryWrapper>
  );
};

export default ClientCountry;