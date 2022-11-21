import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectClientCountry,
  setClientCountry
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const ClientCountry: React.FC = () => {
  const dispatch = useAppDispatch();

  const clientCountry: string = useAppSelector(selectClientCountry);

  const changeClientCountry = (newValue: string) => {
    dispatch(setClientCountry(newValue));
  };
  
  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='client-country'
        label='Country'
        value={clientCountry}
        onChange={changeClientCountry}
        invalid={!clientCountry.length}
      />
    </Styled.CountryWrapper>
  );
};

export default ClientCountry;