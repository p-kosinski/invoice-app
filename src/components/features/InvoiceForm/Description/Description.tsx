import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormDescription,
  setFormDescription
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const Description: React.FC = () => {
  const dispatch = useAppDispatch();

  const description: string = useAppSelector(selectFormDescription);

  const setDescription = (newValue: string) => {
    dispatch(setFormDescription(newValue));
  };
  
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