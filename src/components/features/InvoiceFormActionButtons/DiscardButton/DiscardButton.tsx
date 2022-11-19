import { useAppDispatch } from '../../../../hooks/reduxHooks';

import { setDrawerOpen } from '../../../../redux/invoicesViewSlice';
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

  return (
    <Button
      variant='discard'
      onClick={() => {
        closeDrawer();
        resetFormState();
      }}
    >
      Discard
    </Button>
  );
};

export default DiscardButton;