import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientCountry: React.FC = () => {
  const [clientCountry, setClientCountry] = useState('');
  
  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='client-country'
        label='Country'
        value={clientCountry}
        onChange={setClientCountry}
      />
    </Styled.CountryWrapper>
  );
};

export default ClientCountry;