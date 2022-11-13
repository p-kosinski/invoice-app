import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormClientName,
  setFormClientName
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientName: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientName: string = useAppSelector(selectFormClientName);

  const setClientName = (newValue: string) => {
    dispatch(setFormClientName(newValue));
  };
  
  return (
    <Styled.NameWrapper>
      <TextField
        input='text'
        name='client-name'
        label={`Client's Name`}
        value={clientName}
        onChange={setClientName}
        errorMsg={`can't be empty`}
      />
    </Styled.NameWrapper>
  );
};

export default ClientName;