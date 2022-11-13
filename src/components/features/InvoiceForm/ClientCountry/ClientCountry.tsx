import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormClientCountry,
  setFormClientCountry
} from '../../../../redux/invoicesViewSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientCountry: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientCountry: string = useAppSelector(selectFormClientCountry);

  const setClientCountry = (newValue: string) => {
    dispatch(setFormClientCountry(newValue));
  };
  
  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='client-country'
        label='Country'
        value={clientCountry}
        onChange={setClientCountry}
      />
    </Styled.CountryWrapper>
  );
};

export default ClientCountry;