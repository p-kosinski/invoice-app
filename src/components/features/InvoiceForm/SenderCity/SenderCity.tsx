import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderCity,
  setSenderCity
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderCity: string = useAppSelector(selectSenderCity);

  const changeSenderCity = (newValue: string) => {
    dispatch(setSenderCity(newValue));
  };
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='sender-city'
        label='City'
        value={senderCity}
        onChange={changeSenderCity}
        invalid={!senderCity.length}
      />
    </Styled.CityWrapper>
  );
};

export default SenderCity;