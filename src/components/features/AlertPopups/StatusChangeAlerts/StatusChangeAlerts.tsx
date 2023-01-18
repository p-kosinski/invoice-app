import { AnimatePresence } from 'framer-motion';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectInvoiceStatusChangingState,
  setInvoiceStatusChangingError
} from '../../../../redux/invoicesSlice';
import type { ThunkStatusState } from '../../../../redux/invoicesSlice';

import Alert from '../../../common/Alert/Alert';

const StatusChangeAlerts: React.FC = () => {
  const dispatch = useAppDispatch();

  const statusChanging: ThunkStatusState = useAppSelector(selectInvoiceStatusChangingState);

  const dismissError = () => {
    dispatch(setInvoiceStatusChangingError(false));
  };

  const { error } = statusChanging;

  return (
    <AnimatePresence>
      {error &&
        <Alert
          key='statusChangeError'
          severity='error'
          closeFunc={dismissError}
        >
          Sorry, unable to change invoice status.<br />
          Please try again.
        </Alert>
      }
    </AnimatePresence>
  );
};

export default StatusChangeAlerts;