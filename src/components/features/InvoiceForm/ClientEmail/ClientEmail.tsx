import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientEmail: React.FC = () => {
  const [clientEmail, setClientEmail] = useState('');
  
  return (
    <Styled.EmailWrapper>
      <TextField
        input='text'
        name='client-email'
        label={`Client's Email`}
        value={clientEmail}
        onChange={setClientEmail}
        errorMsg={`can't be empty`}
      />
    </Styled.EmailWrapper>
  );
};

export default ClientEmail;