import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormClientStreetAddress,
  setFormClientStreetAddress
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientStreetAddress: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientStreetAddress: string =
    useAppSelector(selectFormClientStreetAddress);

  const setClientStreetAddress = (newValue: string) => {
    dispatch(setFormClientStreetAddress(newValue));
  };
  
  return (
    <Styled.StreetAddressWrapper>
      <TextField
        input='text'
        name='client-street-address'
        label='Street Address'
        value={clientStreetAddress}
        onChange={setClientStreetAddress}
        errorMsg={`can't be empty`}
      />
    </Styled.StreetAddressWrapper>
  );
};

export default ClientStreetAddress;