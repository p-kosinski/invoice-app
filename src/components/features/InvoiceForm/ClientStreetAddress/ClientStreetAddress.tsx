import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientStreetAddress,
  setClientStreetAddress
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientStreetAddress: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientStreetAddress: string =
    useAppSelector(selectClientStreetAddress);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const changeClientStreetAddress = (newValue: string) => {
    dispatch(setClientStreetAddress(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  useEffect(() => {
    !drawerOpen && setValidate(false);
  }, [drawerOpen]);
  
  return (
    <Styled.StreetAddressWrapper>
      <TextField
        input='text'
        name='client-street-address'
        label='Street Address'
        value={clientStreetAddress}
        onChange={changeClientStreetAddress}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !clientStreetAddress.length}
        errorMsg={`can't be empty`}
      />
    </Styled.StreetAddressWrapper>
  );
};

export default ClientStreetAddress;