import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientEmail,
  setClientEmail
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientEmail: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientEmail: string = useAppSelector(selectClientEmail);

  const changeClientEmail = (newValue: string) => {
    dispatch(setClientEmail(newValue));
  };
  
  return (
    <Styled.EmailWrapper>
      <TextField
        input='text'
        name='client-email'
        label={`Client's Email`}
        value={clientEmail}
        onChange={changeClientEmail}
        errorMsg={`can't be empty`}
      />
    </Styled.EmailWrapper>
  );
};

export default ClientEmail;