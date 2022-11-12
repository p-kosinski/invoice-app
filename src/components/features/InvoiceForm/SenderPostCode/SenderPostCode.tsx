import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderPostCode: React.FC = () => {
  const [senderPostCode, setSenderPostCode] = useState('');

  return (
    <Styled.PostCodeWrapper>
      <TextField
        input='text'
        name='sender-post-code'
        label='Post Code'
        value={senderPostCode}
        onChange={setSenderPostCode}
      />
    </Styled.PostCodeWrapper>
  );
};

export default SenderPostCode;