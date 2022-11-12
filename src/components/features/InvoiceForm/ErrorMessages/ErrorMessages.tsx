import styled from 'styled-components';

import Typography from '../../../common/Typography/Typography';

const ErrorMessagesWrapper = styled.div`
  p:not(:last-of-type) {
    margin-bottom: 2px;
  }
`;

const ErrorMessages: React.FC = () => (
  <ErrorMessagesWrapper>
    <Typography variant='errorMsg'>
      - All fields must be added
    </Typography>
    <Typography variant='errorMsg'>
      - An item must be added
    </Typography>
  </ErrorMessagesWrapper>
);

export default ErrorMessages;