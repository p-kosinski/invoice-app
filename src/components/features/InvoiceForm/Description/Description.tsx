import { useState } from 'react';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const Description: React.FC = () => {
  const [description, setDescription] = useState('');
  
  return (
    <Styled.DescriptionWrapper>
      <TextField
        input='text'
        name='description'
        label='Project Description'
        value={description}
        onChange={setDescription}
        errorMsg={`can't be empty`}
        placeholder='e.g. Graphic Design Service'
      />
    </Styled.DescriptionWrapper>
  );
};

export default Description;