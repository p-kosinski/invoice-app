import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import { resetForm, selectFormValues } from '../../../../redux/invoiceFormSlice';
import type { FormValuesState } from '../../../../redux/invoiceFormSlice';
import { saveInvoice } from '../../../../redux/invoicesSlice';
import {
  setDrawerOpen,
  selectDrawerOpen
} from '../../../../redux/invoicesViewSlice';

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
  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const resetFormState = () => {
    dispatch(resetForm());
  };

  const closeDrawer = () => {
    dispatch(setDrawerOpen(false));
  };

  const handleClick = async () => {
    const invoiceDataObject = prepareInvoiceDataObject('draft', formValues);

    try {
      await dispatch(saveInvoice(invoiceDataObject)).unwrap();
      closeDrawer();
      resetFormState();
    } catch (error) {
      console.error('Failed to save the invoice: ', error);
    }
  };

  return (
    <Button
      variant='draft'
      tabIndex={drawerOpen ? 0 : -1}
      showOnMobile={showOnMobile}
      hideOnMobile={hideOnMobile}
      onClick={() => handleClick()}
    >
      Save as Draft
    </Button>
  );
};
  
export default SaveAsDraftButton;