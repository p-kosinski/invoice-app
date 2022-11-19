import { useAppDispatch } from '../../../hooks/reduxHooks';

import { setDrawerOpen } from '../../../redux/invoicesViewSlice';

import Button from '../../common/Button/Button';

const NewInvoiceButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const openDrawer = () => {
    dispatch(setDrawerOpen(true))
  };

  return (
    <Button
      variant='newInvoice'
      ariaLabel='create new invoice'
      onClick={() => openDrawer()}
    />
  );
};

export default NewInvoiceButton;