import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderPostCode,
  setSenderPostCode
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderPostCode: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderPostCode: string = useAppSelector(selectSenderPostCode);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const changeSenderPostCode = (newValue: string) => {
    dispatch(setSenderPostCode(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  useEffect(() => {
    !drawerOpen && setValidate(false);
  }, [drawerOpen]);

  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='sender-post-code'
        label='Post Code'
        value={senderPostCode}
        onChange={changeSenderPostCode}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !senderPostCode.length}
      />
    </Styled.PostCodeWrapper>
  );
};

export default SenderPostCode;