import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientPostCode: React.FC = () => {
  const [clientPostCode, setClientPostCode] = useState('');
  
  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='client-post-code'
        label='Post Code'
        value={clientPostCode}
        onChange={setClientPostCode}
      />
    </Styled.PostCodeWrapper>
  );
};

export default ClientPostCode;