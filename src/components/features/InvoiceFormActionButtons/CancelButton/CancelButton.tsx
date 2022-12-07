import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  setDrawerOpen,
  selectDrawerOpen
} from '../../../../redux/invoiceViewSlice';
import { resetForm } from '../../../../redux/invoiceFormSlice';

import Button from '../../../common/Button/Button';

const CancelButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const closeDrawer = () => {
    dispatch(setDrawerOpen(false));
  };

  const resetFormState = () => {
    dispatch(resetForm());
  };

  return (
    <Button
      variant='discard'
      tabIndex={drawerOpen ? 0 : -1}
      onClick={() => {
        closeDrawer();
        resetFormState();
      }}
    >
      Cancel
    </Button>
  );
};

export default CancelButton;