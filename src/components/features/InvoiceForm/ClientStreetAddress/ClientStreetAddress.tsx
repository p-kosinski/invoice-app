import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientStreetAddress,
  setClientStreetAddress
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientStreetAddress: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientStreetAddress: string =
    useAppSelector(selectClientStreetAddress);

  const changeClientStreetAddress = (newValue: string) => {
    dispatch(setClientStreetAddress(newValue));
  };
  
  return (
    <Styled.StreetAddressWrapper>
      <TextField
        input='text'
        name='client-street-address'
        label='Street Address'
        value={clientStreetAddress}
        onChange={changeClientStreetAddress}
        errorMsg={`can't be empty`}
      />
    </Styled.StreetAddressWrapper>
  );
};

export default ClientStreetAddress;