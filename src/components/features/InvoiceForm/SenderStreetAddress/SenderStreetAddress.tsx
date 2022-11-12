import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderStreetAddress: React.FC = () => {
  const [senderStreetAddress, setSenderStreetAddress] = useState('');

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