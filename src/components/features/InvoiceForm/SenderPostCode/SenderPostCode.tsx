import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormSenderPostCode,
  setFormSenderPostCode
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderPostCode: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderPostCode: string = useAppSelector(selectFormSenderPostCode);

  const setSenderPostCode = (newValue: string) => {
    dispatch(setFormSenderPostCode(newValue));
  };

  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='sender-post-code'
        label='Post Code'
        value={senderPostCode}
        onChange={setSenderPostCode}
      />
    </Styled.PostCodeWrapper>
  );
};

export default SenderPostCode;