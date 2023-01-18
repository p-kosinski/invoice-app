import LoadingAlerts from './LoadingAlerts/LoadingAlerts';
import StatusChangeAlerts from './StatusChangeAlerts/StatusChangeAlerts';

import Styled from './Styled';

const AlertPopups: React.FC = () => (
  <Styled.Alerts>
    <Styled.AlertsWrapper>
      <LoadingAlerts />
      <StatusChangeAlerts />
    </Styled.AlertsWrapper>
  </Styled.Alerts>
);

export default AlertPopups;