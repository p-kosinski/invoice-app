import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemPriceByIndex,
  setItemPriceByIndex
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

const PriceField: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();

  const itemPrice: string = useAppSelector((state) => 
    selectItemPriceByIndex(state, index)
  );
  const invoiceSavingSuccess: boolean = 
    useAppSelector(selectInvoiceSavingSuccess);
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const setItemPrice = (newValue: string) => {
    dispatch(setItemPriceByIndex({ index: index, newValue: newValue }));
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
        input='decimal'
        name={`item-${index + 1}-price`}
        label='Price'
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
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