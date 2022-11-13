import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormSenderStreetAddress,
  setFormSenderStreetAddress
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderStreetAddress: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderStreetAddress: string =
    useAppSelector(selectFormSenderStreetAddress);

  const setSenderStreetAddress = (newValue: string) => {
    dispatch(setFormSenderStreetAddress(newValue));
  };

  return (
    <Styled.StreetAddressWrapper>
      <TextField
        input='text'
        name='sender-street-address'
        label='Street Address'
        value={senderStreetAddress}
        onChange={setSenderStreetAddress}
        errorMsg={`can't be empty`}
      />
    </Styled.StreetAddressWrapper>
  );
};

export default SenderStreetAddress;