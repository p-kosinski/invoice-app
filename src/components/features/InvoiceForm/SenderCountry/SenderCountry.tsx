import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormSenderCountry,
  setFormSenderCountry
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCountry: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderCountry: string = useAppSelector(selectFormSenderCountry);

  const setSenderCountry = (newValue: string) => {
    dispatch(setFormSenderCountry(newValue));
  };
  
  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='sender-country'
        label='Country'
        value={senderCountry}
        onChange={setSenderCountry}
      />
    </Styled.CountryWrapper>
  );
};

export default SenderCountry;