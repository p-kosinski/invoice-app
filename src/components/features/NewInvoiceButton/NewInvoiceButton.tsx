import { useAppDispatch } from '../../../hooks/reduxHooks';

import { setDrawerOpen } from '../../../redux/invoicesViewSlice';
import { setInvoiceSavingSuccess } from '../../../redux/invoicesSlice';

import Button from '../../common/Button/Button';

const NewInvoiceButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const openDrawer = () => {
    dispatch(setDrawerOpen(true))
  };

  const resetInvoiceSendingSuccess = () => {
    dispatch(setInvoiceSavingSuccess(false));
  };

  return (
    <Button
      variant='newInvoice'
      ariaLabel='create new invoice'
      onClick={() => {
        openDrawer();
        resetInvoiceSendingSuccess();
      }}
    />
  );
};

export default NewInvoiceButton;