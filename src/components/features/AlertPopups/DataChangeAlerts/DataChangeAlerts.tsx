import { AnimatePresence } from 'framer-motion';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectInvoiceDataChangingState,
  setInvoiceDataChangingError,
  setInvoiceDataChangingSuccess
} from '../../../../redux/invoicesSlice';
import type { ThunkStatusWithSuccessState } from '../../../../redux/invoicesSlice';

import Alert from '../../../common/Alert/Alert';

const DataChangeAlerts: React.FC = () => {
  const dispatch = useAppDispatch();

  const dataChanging: ThunkStatusWithSuccessState = useAppSelector(
    selectInvoiceDataChangingState
  );

  const dismissError = () => {
    dispatch(setInvoiceDataChangingError(false));
  };

  const dismissSuccess = () => {
    dispatch(setInvoiceDataChangingSuccess(false));
  };

  const { error, success } = dataChanging;

  return (
    <AnimatePresence>
      {error &&
        <Alert
          key='dataChangingError'
          severity='error'
          closeFunc={dismissError}
          autoClose
        >
          Sorry, unable to save changes.<br />
          Please try again.
        </Alert>
      }
      {success &&
        <Alert
          key='dataChangingSuccess'
          severity='success'
          closeFunc={dismissSuccess}
          autoClose
        >
          Invoice data has been changed successfully!
        </Alert>
      }
    </AnimatePresence>
  );
};

export default DataChangeAlerts;