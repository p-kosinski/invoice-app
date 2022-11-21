import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderStreetAddress,
  setSenderStreetAddress
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderStreetAddress: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderStreetAddress: string =
    useAppSelector(selectSenderStreetAddress);

  const changeSenderStreetAddress = (newValue: string) => {
    dispatch(setSenderStreetAddress(newValue));
  };

  return (
    <Styled.StreetAddressWrapper>
      <TextField
        input='text'
        name='sender-street-address'
        label='Street Address'
        value={senderStreetAddress}
        onChange={changeSenderStreetAddress}
        invalid={!senderStreetAddress.length}
        errorMsg={`can't be empty`}
      />
    </Styled.StreetAddressWrapper>
  );
};

export default SenderStreetAddress;