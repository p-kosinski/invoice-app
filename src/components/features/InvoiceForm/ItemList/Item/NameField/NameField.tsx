import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemNameByIndex,
  setItemNameByIndex
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

const NameField: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();

  const itemName: string = useAppSelector((state) => 
    selectItemNameByIndex(state, index)
  );
  const invoiceSavingSuccess: boolean =
    useAppSelector(selectInvoiceSavingSuccess);
  const invoiceDataChangingSuccess: boolean =
    useAppSelector(selectInvoiceDataChangingSuccess);
  const validationActive: boolean = useAppSelector(selectValidationActive);
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const setItemName = (newValue: string) => {
    dispatch(setItemNameByIndex({ index: index, newValue: newValue }));
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
        input='text'
        name={`item-${index + 1}-name`}
        label='Item Name'
        inputTabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
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