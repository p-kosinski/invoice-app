import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCity: React.FC = () => {
  const [senderCity, setSenderCity] = useState('');
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='sender-city'
        label='City'
        value={senderCity}
        onChange={setSenderCity}
      />
    </Styled.CityWrapper>
  );
};

export default SenderCity;