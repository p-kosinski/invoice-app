import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectDescription,
  setDescription
} from '../../../../redux/invoiceFormSlice';

import { selectInvoiceSavingSuccess } from '../../../../redux/invoicesSlice';
import { selectValidationActive } from '../../../../redux/invoiceFormSlice';

import TextField from '../../../common/TextField/TextField';

import Styled from '../Styled';

const Description: React.FC = () => {
  const dispatch = useAppDispatch();

  const description: string = useAppSelector(selectDescription);
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const changeDescription = (newValue: string) => {
    dispatch(setDescription(newValue));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);
  
  return (
    <Styled.DescriptionWrapper>
      <TextField
        input='text'
        name='description'
        label='Project Description'
        value={description}
        onChange={changeDescription}
        onBlur={() => setValidate(true)}
        placeholder='e.g. Graphic Design Service'
        invalid={(validate || validationActive) && !description.length}
        errorMsg={`can't be empty`}
      />
    </Styled.DescriptionWrapper>
  );
};

export default Description;