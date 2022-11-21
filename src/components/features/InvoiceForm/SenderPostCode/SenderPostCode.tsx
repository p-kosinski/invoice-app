import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderPostCode,
  setSenderPostCode
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderPostCode: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderPostCode: string = useAppSelector(selectSenderPostCode);

  const changeSenderPostCode = (newValue: string) => {
    dispatch(setSenderPostCode(newValue));
  };

  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='sender-post-code'
        label='Post Code'
        value={senderPostCode}
        onChange={changeSenderPostCode}
        invalid={!senderPostCode.length}
      />
    </Styled.PostCodeWrapper>
  );
};

export default SenderPostCode;