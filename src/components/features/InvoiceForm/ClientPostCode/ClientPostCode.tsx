import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientPostCode,
  setClientPostCode
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientPostCode: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientPostCode: string = useAppSelector(selectClientPostCode);

  const changeClientPostCode = (newValue: string) => {
    dispatch(setClientPostCode(newValue));
  };
  
  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='client-post-code'
        label='Post Code'
        value={clientPostCode}
        onChange={changeClientPostCode}
      />
    </Styled.PostCodeWrapper>
  );
};

export default ClientPostCode;