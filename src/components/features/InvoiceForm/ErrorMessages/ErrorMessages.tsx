import styled from 'styled-components';

import { useAppSelector } from '../../../../hooks/reduxHooks';

import { selectValidationErrors } from '../../../../redux/invoiceFormSlice';
import type { FormValidationErrors } from '../../../../redux/invoiceFormSlice';

import Typography from '../../../common/Typography/Typography';

const ErrorMessagesWrapper = styled.div`
  p:not(:last-of-type) {
    margin-bottom: 2px;
  }
`;

const ErrorMessages: React.FC = () => {
  const validationErrors: FormValidationErrors = useAppSelector(selectValidationErrors);

  const { blankFields, noItems } = validationErrors;

  return (
    <ErrorMessagesWrapper>
      {blankFields && 
        <Typography variant='errorMsg'>
          - All fields must be added
        </Typography>
      }
      {noItems && 
        <Typography variant='errorMsg'>
          - An item must be added
        </Typography>
      }
    </ErrorMessagesWrapper>
  );
};

export default ErrorMessages;