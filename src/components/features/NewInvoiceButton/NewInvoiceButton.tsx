import { useAppDispatch } from '../../../hooks/reduxHooks';

import { setDrawerOpen, setRenderForm } from '../../../redux/invoicesViewSlice';

import Button from '../../common/Button/Button';

const NewInvoiceButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const openDrawer = () => {
    dispatch(setDrawerOpen(true))
  };

  const mountForm = () => {
    dispatch(setRenderForm(true))
  };

  return (
    <Button
      variant='newInvoice'
      ariaLabel='create new invoice'
      onClick={() => {
        mountForm();
        openDrawer();
      }}
    />
  );
};

export default NewInvoiceButton;