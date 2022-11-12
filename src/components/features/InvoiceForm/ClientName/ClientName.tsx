import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientName: React.FC = () => {
  const [clientName, setClientName] = useState('');
  
  return (
    <Styled.NameWrapper>
      <TextField
        input='text'
        name='client-name'
        label={`Client's Name`}
        value={clientName}
        onChange={setClientName}
        errorMsg={`can't be empty`}
      />
    </Styled.NameWrapper>
  );
};

export default ClientName;