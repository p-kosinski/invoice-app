import LoadingAlerts from './LoadingAlerts/LoadingAlerts';

import Styled from './Styled';

const AlertPopups: React.FC = () => (
  <Styled.Alerts>
    <Styled.AlertsWrapper>
      <LoadingAlerts />
    </Styled.AlertsWrapper>
  </Styled.Alerts>
);

export default AlertPopups;