import { useAppDispatch } from '../../../../hooks/reduxHooks';

import { setDrawerOpen, setRenderForm } from '../../../../redux/invoicesViewSlice';
import { resetForm } from '../../../../redux/invoiceFormSlice';

import Button from '../../../common/Button/Button';

const DiscardButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const closeDrawer = () => {
    dispatch(setDrawerOpen(false));
  };

  const resetFormState = () => {
    dispatch(resetForm());
  };

  const unmountForm = () => {
    dispatch(setRenderForm(false));
  };

  return (
    <Button
      variant='discard'
      onClick={() => {
        closeDrawer();
        resetFormState();
        unmountForm();
      }}
    >
      Discard
    </Button>
  );
};

export default DiscardButton;