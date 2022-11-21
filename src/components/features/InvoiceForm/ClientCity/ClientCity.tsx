import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientCity,
  setClientCity
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientCity: string = useAppSelector(selectClientCity);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const changeClientCity = (newValue: string) => {
    dispatch(setClientCity(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='client-city'
        label='City'
        value={clientCity}
        onChange={changeClientCity}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientCity.length}
      />
    </Styled.CityWrapper>
  );
};

export default ClientCity;