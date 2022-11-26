import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemQuantityByIndex,
  setItemQuantityByIndex
} from '../../../../../../redux/invoiceFormSlice';

import {
  selectInvoiceSavingSuccess
} from '../../../../../../redux/invoicesSlice';
import {
  selectValidationActive
} from '../../../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../../../redux/invoicesViewSlice';

import TextField from '../../../../../common/TextField/TextField';

type Props = {
  index: number;
};

const QuantityField: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();
  
  const itemQuantity: string = useAppSelector((state) => 
    selectItemQuantityByIndex(state, index)
  );
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const setItemQuantity = (newValue: string) => {
    dispatch(setItemQuantityByIndex({ index: index, newValue: newValue }));
  };

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    invoiceSavingSuccess && setValidate(false);
  }, [invoiceSavingSuccess]);

  useEffect(() => {
    !drawerOpen && setValidate(false);
  }, [drawerOpen]);

  return (
    <>
      <TextField
        input='numeric'
        name={`item-${index + 1}-quantity`}
        label='Qty.'
        inputTabIndex={drawerOpen ? 0 : -1}
        value={itemQuantity}
        onChange={setItemQuantity}
        onBlur={() => setValidate(true)}
        invalid={(validate || validationActive) && !itemQuantity.length}
        showLabelOnlyOnMobile
      />
    </>
  );
};

export default QuantityField;