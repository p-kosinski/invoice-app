import { useState, useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderStreetAddress,
  setSenderStreetAddress
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';
import type { Ref } from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderStreetAddress: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderStreetAddress: string =
    useAppSelector(selectSenderStreetAddress);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const changeSenderStreetAddress = (newValue: string) => {
    dispatch(setSenderStreetAddress(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  useEffect(() => {
    !drawerOpen && setValidate(false);
  }, [drawerOpen]);

  const inputRef = useRef<Ref>(null);

  useEffect(() => {
    drawerOpen && inputRef.current?.focus();
  }, [drawerOpen]);

  return (
    <Styled.StreetAddressWrapper>
      <TextField
        input='text'
        name='sender-street-address'
        label='Street Address'
        inputTabIndex={drawerOpen ? 0 : -1}
        value={senderStreetAddress}
        onChange={changeSenderStreetAddress}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !senderStreetAddress.length}
        errorMsg={`can't be empty`}
        ref={inputRef}
      />
    </Styled.StreetAddressWrapper>
  );
};

export default SenderStreetAddress;