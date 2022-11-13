import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormClientEmail,
  setFormClientEmail
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientEmail: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientEmail: string = useAppSelector(selectFormClientEmail);

  const setClientEmail = (newValue: string) => {
    dispatch(setFormClientEmail(newValue));
  };
  
  return (
    <Styled.EmailWrapper>
      <TextField
        input='text'
        name='client-email'
        label={`Client's Email`}
        value={clientEmail}
        onChange={setClientEmail}
        errorMsg={`can't be empty`}
      />
    </Styled.EmailWrapper>
  );
};

export default ClientEmail;