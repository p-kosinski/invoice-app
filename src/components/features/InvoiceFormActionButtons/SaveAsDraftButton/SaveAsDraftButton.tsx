import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import { resetForm, selectFormValues } from '../../../../redux/invoiceFormSlice';
import type { FormValuesState } from '../../../../redux/invoiceFormSlice';
import { saveInvoice } from '../../../../redux/invoicesSlice';
import { setDrawerOpen } from '../../../../redux/invoicesViewSlice';

import { prepareInvoiceDataObject } from '../../../../utils/formUtils';

import Button from '../../../common/Button/Button';

type Props = {
  showOnMobile?: boolean;
  hideOnMobile?: boolean;
};

const SaveAsDraftButton: React.FC<Props> = ({
  showOnMobile,
  hideOnMobile
}) => {
  const dispatch = useAppDispatch();

  const formValues: FormValuesState = useAppSelector(selectFormValues);

  const saveInvoiceAsDraft = () => {
    const invoiceDataObject = prepareInvoiceDataObject('draft', formValues);

    dispatch(saveInvoice(invoiceDataObject));
  };

  const resetFormState = () => {
    dispatch(resetForm());
  };

  const closeDrawer = () => {
    dispatch(setDrawerOpen(false));
  };

  const handleClick = () => {
    saveInvoiceAsDraft();
    closeDrawer();
    resetFormState();
  };

  return (
    <Button
      variant='draft'
      showOnMobile={showOnMobile}
      hideOnMobile={hideOnMobile}
      onClick={() => handleClick()}
    >
      Save as Draft
    </Button>
  );
};
  
export default SaveAsDraftButton;