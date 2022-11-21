import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectFormValues,
  resetForm,
  setValidationActive,
  setValidationBlankFieldsError,
  setValidationNoItemsError
} from '../../../../redux/invoiceFormSlice';
import type { FormValuesState } from '../../../../redux/invoiceFormSlice';
import { saveInvoice } from '../../../../redux/invoicesSlice';
import type { Address } from '../../../../redux/invoicesSlice';
import { setDrawerOpen } from '../../../../redux/invoicesViewSlice';

import { prepareInvoiceDataObject } from '../../../../utils/formUtils';

import Button from '../../../common/Button/Button';

const SaveAndSendButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const formValues: FormValuesState = useAppSelector(selectFormValues);

  const saveInvoiceAsPending = () => {
    const invoiceDataObject = prepareInvoiceDataObject('pending', formValues);

    dispatch(saveInvoice(invoiceDataObject));
  };

  const resetFormState = () => {
    dispatch(resetForm());
  };

  const closeDrawer = () => {
    dispatch(setDrawerOpen(false));
  };

  const changeValidationActive = (value: boolean) => {
    dispatch(setValidationActive(value));
  };

  const changeValidationBlankFieldsError = (value: boolean) => {
    dispatch(setValidationBlankFieldsError(value));
  };

  const changeValidationNoItemsError = (value: boolean) => {
    dispatch(setValidationNoItemsError(value));
  };

  const validateForm = (): boolean => {
    let validationErrorOccured = false;

    const {
      senderAddress,
      clientName,
      clientEmail,
      clientAddress,
      issueDate,
      paymentTerms,
      description,
      items
    } = formValues;

    const validateFormStringValue = (fieldValue: string) => {
      if(!validationErrorOccured && !fieldValue.length) {
        validationErrorOccured = true;
        changeValidationBlankFieldsError(true);
      }
    };

    const validateFormPaymentTerms = (fieldValue: number) => {
      const fieldValueIsValid = (
        fieldValue === 1
          ||
        fieldValue === 7
          ||
        fieldValue === 14
          ||
        fieldValue === 30
      );

      if(!validationErrorOccured && !fieldValueIsValid) {
        validationErrorOccured = true;
      }
    };

    const validateAddressFields = (addressFields: Address) => {
      for (let addressField in addressFields) {
        validateFormStringValue(addressField);
      }
    };

    changeValidationActive(true);

    changeValidationBlankFieldsError(false);
    changeValidationNoItemsError(false);

    validateAddressFields(senderAddress);
    validateFormStringValue(clientName);
    validateFormStringValue(clientEmail);
    validateAddressFields(clientAddress);

    validateFormStringValue(issueDate);
    validateFormPaymentTerms(paymentTerms);
    validateFormStringValue(description);

    if(!items.length) {
      validationErrorOccured = true;
      changeValidationNoItemsError(true);
    } else {
      for (let item of items) {
        const { name, quantity, price } = item;

        validateFormStringValue(name);
        validateFormStringValue(quantity);
        validateFormStringValue(price);
      }
    }

    const formIsValid = !validationErrorOccured;

    return formIsValid;
  };

  const handleClick = () => {
    const formIsValid = validateForm();

    if (formIsValid) {
      saveInvoiceAsPending();
      closeDrawer();
      resetFormState();
    }
  };

  return (
    <Button
      variant='primary'
      onClick={() => handleClick()}
    >
      Save & Send
    </Button>
  );
};
    
export default SaveAndSendButton;