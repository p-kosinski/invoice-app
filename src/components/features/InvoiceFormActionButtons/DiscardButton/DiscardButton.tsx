import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  setDrawerOpen,
  selectDrawerOpen
} from '../../../../redux/invoicesViewSlice';
import { resetForm } from '../../../../redux/invoiceFormSlice';

import Button from '../../../common/Button/Button';

const DiscardButton: React.FC = () => {
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
      Discard
    </Button>
  );
};

export default DiscardButton;