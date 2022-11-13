import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormClientCity,
  setFormClientCity
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientCity: string = useAppSelector(selectFormClientCity);

  const setClientCity = (newValue: string) => {
    dispatch(setFormClientCity(newValue));
  };
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='client-city'
        label='City'
        value={clientCity}
        onChange={setClientCity}
      />
    </Styled.CityWrapper>
  );
};

export default ClientCity;