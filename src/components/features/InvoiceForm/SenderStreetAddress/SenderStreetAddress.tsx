import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderStreetAddress,
  setSenderStreetAddress
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderStreetAddress: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderStreetAddress: string =
    useAppSelector(selectSenderStreetAddress);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const changeSenderStreetAddress = (newValue: string) => {
    dispatch(setSenderStreetAddress(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  return (
    <Styled.StreetAddressWrapper>
      <TextField
        input='text'
        name='sender-street-address'
        label='Street Address'
        value={senderStreetAddress}
        onChange={changeSenderStreetAddress}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !senderStreetAddress.length}
        errorMsg={`can't be empty`}
      />
    </Styled.StreetAddressWrapper>
  );
};

export default SenderStreetAddress;