import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Alert from '../../common/Alert/Alert';

import Styled from './Styled';

const AlertPopups: React.FC = () => {
  const [saveSuccess, setSaveSuccess] = useState(true);
  const [loadingError, setLoadingError] = useState(true);
  const [dataChangeSuccess, setDataChangeSuccess] = useState(true);
  const [statusChangeError, setStatusChangeError] = useState(true);

  return (
    <Styled.Alerts>
      <Styled.AlertsWrapper>
        <AnimatePresence>
          {saveSuccess &&
            <Alert
              key='saveSuccess'
              severity='success'
              closeFunc={() => setSaveSuccess(false)}
            >
              Invoice has been saved successfully!
            </Alert>
          }
          {loadingError &&
            <Alert
              key='loadingError'
              severity='error'
              closeFunc={() => setLoadingError(false)}
            >
              Sorry, unable to load invoices!<br/>
              Please try again by refreshing this page.
            </Alert>
          }
          {dataChangeSuccess &&
            <Alert
              key='dataChangeSuccess'
              severity='success'
              closeFunc={() => setDataChangeSuccess(false)}
            >
              Invoice data has been changed successfully!
            </Alert>
          }
          {statusChangeError &&
            <Alert
              key='statusChangeError'
              severity='error'
              closeFunc={() => setStatusChangeError(false)}
            >
              Sorry, unable to mark invoice as paid!<br/>
              Please try again.
            </Alert>
          }
        </AnimatePresence>
      </Styled.AlertsWrapper>
    </Styled.Alerts>
  );
};

export default AlertPopups;