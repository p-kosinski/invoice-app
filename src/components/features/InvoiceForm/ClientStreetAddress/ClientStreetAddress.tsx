import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientStreetAddress: React.FC = () => {
  const [clientStreetAddress, setClientStreetAddress] = useState('');
  
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