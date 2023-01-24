import { AnimatePresence } from 'framer-motion';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectInvoiceDeletionState,
  setInvoiceDeletingError,
  setInvoiceDeletingSuccess
} from '../../../../redux/invoicesSlice';
import type { ThunkStatusWithSuccessState } from '../../../../redux/invoicesSlice';

import Alert from '../../../common/Alert/Alert';

const DeletionAlerts: React.FC = () => {
  const dispatch = useAppDispatch();

  const deleting: ThunkStatusWithSuccessState = useAppSelector(
    selectInvoiceDeletionState
  );

  const dismissError = () => {
    dispatch(setInvoiceDeletingError(false));
  };

  const dismissSuccess = () => {
    dispatch(setInvoiceDeletingSuccess(false));
  };

  const { error, success } = deleting;

  return (
    <AnimatePresence>
      {error &&
        <Alert
          key='deletingError'
          severity='error'
          closeFunc={dismissError}
          autoClose
        >
          Sorry, unable to delete this invoice.<br />
          Please try again.
        </Alert>
      }
      {success &&
        <Alert
          key='deletingSuccess'
          severity='success'
          closeFunc={dismissSuccess}
          autoClose
        >
          Invoice has been deleted successfully!
        </Alert>
      }
    </AnimatePresence>
  );
};

export default DeletionAlerts;