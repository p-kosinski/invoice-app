import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectSenderCountry,
  setSenderCountry
} from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const SenderCountry: React.FC = () => {
  const dispatch = useAppDispatch();

  const senderCountry: string = useAppSelector(selectSenderCountry);

  const changeSenderCountry = (newValue: string) => {
    dispatch(setSenderCountry(newValue));
  };
  
  return (
    <Styled.CountryWrapper>
      <TextField
        input='text'
        name='sender-country'
        label='Country'
        value={senderCountry}
        onChange={changeSenderCountry}
      />
    </Styled.CountryWrapper>
  );
};

export default SenderCountry;