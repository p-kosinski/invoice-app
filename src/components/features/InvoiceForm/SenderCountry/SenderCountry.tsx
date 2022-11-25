import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderCountry,
  setSenderCountry
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCountry: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderCountry: string = useAppSelector(selectSenderCountry);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const changeSenderCountry = (newValue: string) => {
    dispatch(setSenderCountry(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  useEffect(() => {
    !drawerOpen && setValidate(false);
  }, [drawerOpen]);
  
  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='sender-country'
        label='Country'
        value={senderCountry}
        onChange={changeSenderCountry}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !senderCountry.length}
      />
    </Styled.CountryWrapper>
  );
};

export default SenderCountry;