import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientCity: React.FC = () => {
  const [clientCity, setClientCity] = useState('');
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='client-city'
        label='City'
        value={clientCity}
        onChange={setClientCity}
      />
    </Styled.CityWrapper>
  );
};

export default ClientCity;