import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormClientPostCode,
  setFormClientPostCode
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientPostCode: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientPostCode: string = useAppSelector(selectFormClientPostCode);

  const setClientPostCode = (newValue: string) => {
    dispatch(setFormClientPostCode(newValue));
  };
  
  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='client-post-code'
        label='Post Code'
        value={clientPostCode}
        onChange={setClientPostCode}
      />
    </Styled.PostCodeWrapper>
  );
};

export default ClientPostCode;