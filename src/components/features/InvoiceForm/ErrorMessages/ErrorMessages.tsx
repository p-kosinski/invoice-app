import styled, { css, DefaultTheme } from 'styled-components';

import { useAppSelector } from '../../../../hooks/reduxHooks';

import { selectValidationErrors } from '../../../../redux/invoiceFormSlice';
import type { FormValidationErrors } from '../../../../redux/invoiceFormSlice';

import Typography from '../../../common/Typography/Typography';

const ErrorMessagesWrapper = styled.div`
  div:not(:last-of-type) {
    margin-bottom: 2px;
  }
`;

type ErrorMessageProps = {
  theme: DefaultTheme;
  $show?: boolean;
};

const ErrorMessage = styled.div<ErrorMessageProps>(
  ({ theme, $show }) => css`
    transform: ${$show ? 'translateX(0)' : 'translateX(24px)'};
    opacity: ${$show ? 1 : 0};
    transition:
      transform ${theme.transitionDuration} ease-in-out,
      opacity ${theme.transitionDuration} ease-in-out;
  `
);

const ErrorMessages: React.FC = () => {
  const validationErrors: FormValidationErrors = useAppSelector(selectValidationErrors);

  const { blankFields, noItems } = validationErrors;

  return (
    <ErrorMessagesWrapper>
      <ErrorMessage $show={blankFields}>
        <Typography variant='errorMsg'>
          - All fields must be added
        </Typography>
      </ErrorMessage>
      <ErrorMessage $show={noItems}>
      <Typography variant='errorMsg'>
          - An item must be added
        </Typography>
      </ErrorMessage>
    </ErrorMessagesWrapper>
  );
};

export default ErrorMessages;