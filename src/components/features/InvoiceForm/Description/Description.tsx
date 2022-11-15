import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectDescription,
  setDescription
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const Description: React.FC = () => {
  const dispatch = useAppDispatch();

  const description: string = useAppSelector(selectDescription);

  const changeDescription = (newValue: string) => {
    dispatch(setDescription(newValue));
  };
  
  return (
    <Styled.DescriptionWrapper>
      <TextField
        input='text'
        name='description'
        label='Project Description'
        value={description}
        onChange={changeDescription}
        errorMsg={`can't be empty`}
        placeholder='e.g. Graphic Design Service'
      />
    </Styled.DescriptionWrapper>
  );
};

export default Description;