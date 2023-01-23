import { AnimatePresence } from 'framer-motion';

import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectInvoiceSavingState,
  setInvoiceSavingError,
  setInvoiceSavingSuccess
} from '../../../../redux/invoicesSlice';
import type { ThunkStatusWithSuccessState } from '../../../../redux/invoicesSlice';

import Alert from '../../../common/Alert/Alert';

const SavingAlerts: React.FC = () => {
  const dispatch = useAppDispatch();

  const saving: ThunkStatusWithSuccessState = useAppSelector(
    selectInvoiceSavingState
  );

  const dismissError = () => {
    dispatch(setInvoiceSavingError(false));
  };

  const dismissSuccess = () => {
    dispatch(setInvoiceSavingSuccess(false));
  };

  const { error, success } = saving;

  return (
    <AnimatePresence>
      {error &&
        <Alert
          key='savingError'
          severity='error'
          closeFunc={dismissError}
        >
          Sorry, unable to save invoice.<br />
          Please try again.
        </Alert>
      }
      {success &&
        <Alert
          key='savingSuccess'
          severity='success'
          closeFunc={dismissSuccess}
        >
          Invoice has been saved successfully!
        </Alert>
      }
    </AnimatePresence>
  );
};

export default SavingAlerts;