import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientName,
  setClientName
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientName: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientName: string = useAppSelector(selectClientName);

  const changeClientName = (newValue: string) => {
    dispatch(setClientName(newValue));
  };
  
  return (
    <Styled.NameWrapper>
      <TextField
        input='text'
        name='client-name'
        label={`Client's Name`}
        value={clientName}
        onChange={changeClientName}
        errorMsg={`can't be empty`}
      />
    </Styled.NameWrapper>
  );
};

export default ClientName;