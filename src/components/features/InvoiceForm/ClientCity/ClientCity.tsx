import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientCity,
  setClientCity
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientCity: string = useAppSelector(selectClientCity);

  const changeClientCity = (newValue: string) => {
    dispatch(setClientCity(newValue));
  };
  
  return (
    <Styled.CityWrapper>
      <TextField
        input='text'
        name='client-city'
        label='City'
        value={clientCity}
        onChange={changeClientCity}
      />
    </Styled.CityWrapper>
  );
};

export default ClientCity;