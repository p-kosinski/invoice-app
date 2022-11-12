import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCountry: React.FC = () => {
  const [senderCountry, setSenderCountry] = useState('');
  
  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='sender-country'
        label='Country'
        value={senderCountry}
        onChange={setSenderCountry}
      />
    </Styled.CountryWrapper>
  );
};

export default SenderCountry;