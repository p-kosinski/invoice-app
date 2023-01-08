import { useState, useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderStreetAddress,
  setSenderStreetAddress
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
import type { Ref } from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderStreetAddress: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderStreetAddress: string =
    useAppSelector(selectSenderStreetAddress);
  const invoiceSavingSuccess: boolean =
    useAppSelector(selectInvoiceSavingSuccess);
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const changeSenderStreetAddress = (newValue: string) => {
    dispatch(setSenderStreetAddress(newValue));
  };

  const [validate, setValidate] = useState<boolean>(false);

  useEffect(() => {
    (invoiceSavingSuccess || invoiceDataChangingSuccess) && setValidate(false);
  }, [invoiceSavingSuccess, invoiceDataChangingSuccess]);

  useEffect(() => {
    (!invoicesDrawerOpen || !invoiceDrawerOpen) && setValidate(false);
  }, [invoicesDrawerOpen, invoiceDrawerOpen]);

  const inputRef = useRef<Ref>(null);

  useEffect(() => {
    (invoicesDrawerOpen || invoiceDrawerOpen) && inputRef.current?.focus();
  }, [invoicesDrawerOpen, invoiceDrawerOpen]);

  return (
    <Styled.StreetAddressWrapper>
      <TextField
        input='text'
        name='sender-street-address'
        label='Street Address'
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
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