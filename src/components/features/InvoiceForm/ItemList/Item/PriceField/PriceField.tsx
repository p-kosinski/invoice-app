import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemPriceByIndex,
  setItemPriceByIndex
} from '../../../../../../redux/invoiceFormSlice';

import {
  selectInvoiceSavingSuccess
} from '../../../../../../redux/invoicesSlice';
import {
  selectValidationActive
} from '../../../../../../redux/invoiceFormSlice';

import TextField from '../../../../../common/TextField/TextField';

type Props = {
  index: number;
};

const PriceField: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();

  const itemPrice: string = useAppSelector((state) => 
    selectItemPriceByIndex(state, index)
  );
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const setItemPrice = (newValue: string) => {
    dispatch(setItemPriceByIndex({ index: index, newValue: newValue }));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  return (
    <>
      <TextField
        input='decimal'
        name={`item-${index + 1}-price`}
        label='Price'
        value={itemPrice}
        onChange={setItemPrice}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !itemPrice.length}
        showLabelOnlyOnMobile
      />
    </>
  );
};

export default PriceField;