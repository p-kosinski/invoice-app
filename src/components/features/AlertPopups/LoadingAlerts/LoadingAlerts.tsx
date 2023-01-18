import { AnimatePresence } from 'framer-motion';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectInvoicesLoadingState,
  setInvoiceLoadingError
} from '../../../../redux/invoicesSlice';
import type { ThunkStatusState } from '../../../../redux/invoicesSlice';

import Alert from '../../../common/Alert/Alert';

const LoadingAlerts: React.FC = () => {
  const dispatch = useAppDispatch();

  const loading: ThunkStatusState = useAppSelector(selectInvoicesLoadingState);

  const dismissError = () => {
    dispatch(setInvoiceLoadingError(false));
  };

  const { error } = loading;

  return (
    <AnimatePresence>
      {error &&
        <Alert
          key='loadingError'
          severity='error'
          closeFunc={dismissError}
        >
          Sorry, unable to load invoices.<br />
          Please try again by refreshing this page.
        </Alert>
      }
    </AnimatePresence>
  );
};

export default LoadingAlerts;