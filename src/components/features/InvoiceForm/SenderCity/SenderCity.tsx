import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormSenderCity,
  setFormSenderCity
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderCity: string = useAppSelector(selectFormSenderCity);

  const setSenderCity = (newValue: string) => {
    dispatch(setFormSenderCity(newValue));
  };
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='sender-city'
        label='City'
        value={senderCity}
        onChange={setSenderCity}
      />
    </Styled.CityWrapper>
  );
};

export default SenderCity;