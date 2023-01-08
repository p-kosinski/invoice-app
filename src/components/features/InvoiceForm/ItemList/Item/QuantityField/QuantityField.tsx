import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemQuantityByIndex,
  setItemQuantityByIndex
} from '../../../../../../redux/invoiceFormSlice';

import {
  selectInvoiceSavingSuccess,
  selectInvoiceDataChangingSuccess
} from '../../../../../../redux/invoicesSlice';
import {
  selectValidationActive
} from '../../../../../../redux/invoiceFormSlice';
import {
  selectDrawerOpen as selectInvoicesDrawerOpen
} from '../../../../../../redux/invoicesViewSlice';
import {
  selectDrawerOpen as selectInvoiceDrawerOpen
} from '../../../../../../redux/invoiceViewSlice';

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
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const setItemQuantity = (newValue: string) => {
    dispatch(setItemQuantityByIndex({ index: index, newValue: newValue }));
  };

  const [validate, setValidate] = useState<boolean>(false);

  useEffect(() => {
    (invoiceSavingSuccess || invoiceDataChangingSuccess) && setValidate(false);
  }, [invoiceSavingSuccess, invoiceDataChangingSuccess]);

  useEffect(() => {
    (!invoicesDrawerOpen || !invoiceDrawerOpen) && setValidate(false);
  }, [invoicesDrawerOpen, invoiceDrawerOpen]);

  return (
    <>
      <TextField
        input='numeric'
        name={`item-${index + 1}-quantity`}
        label='Qty.'
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
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