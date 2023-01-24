import { ReactNode, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faTriangleExclamation,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

import Typography from '../Typography/Typography';

import Styled from './Styled';

type Props = {
  severity: 'success' | 'error';
  closeFunc: () => void;
  autoClose?: boolean;
  children?: ReactNode;
};

const Alert: React.FC<Props> = ({
  severity,
  closeFunc,
  autoClose,
  children
}) => {
  useEffect(() => {
    if(autoClose) {
      const autoCloseAlert = setTimeout(() => {
        closeFunc();
      }, 8000);
      return () => clearTimeout(autoCloseAlert);
    }
  }, []);

  return (
    <Styled.Alert
      $severity={severity}
      layout='position'
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.15 }}
    >
      <Styled.HeadingWrapper>
        {severity === 'success' &&
          <FontAwesomeIcon icon={faCircleCheck} />
        }
        {severity === 'error' &&
          <FontAwesomeIcon icon={faTriangleExclamation} />
        }
        <Styled.CloseButton onClick={() => closeFunc()}>
          <FontAwesomeIcon icon={faXmark} />
        </Styled.CloseButton>
      </Styled.HeadingWrapper>
      <Typography variant='h4' element='p'>
        {children}
      </Typography>
    </Styled.Alert>
  );
};

export default Alert;