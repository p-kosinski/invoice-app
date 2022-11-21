import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemNameByIndex,
  setItemNameByIndex
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

const NameField: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();

  const itemName: string = useAppSelector((state) => 
    selectItemNameByIndex(state, index)
  );
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);

  const setItemName = (newValue: string) => {
    dispatch(setItemNameByIndex({ index: index, newValue: newValue }));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  return (
    <>
      <TextField
        input='text'
        name={`item-${index + 1}-name`}
        label='Item Name'
        value={itemName}
        onChange={setItemName}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !itemName.length}
        errorMsg={`can't be empty`}
        showLabelOnlyOnMobile
      />
    </>
  );
};

export default NameField;