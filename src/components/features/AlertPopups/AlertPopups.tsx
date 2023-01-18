import LoadingAlerts from './LoadingAlerts/LoadingAlerts';
import StatusChangeAlerts from './StatusChangeAlerts/StatusChangeAlerts';
import DataChangeAlerts from './DataChangeAlerts/DataChangeAlerts';

import Styled from './Styled';

const AlertPopups: React.FC = () => (
  <Styled.Alerts>
    <Styled.AlertsWrapper>
      <LoadingAlerts />
      <StatusChangeAlerts />
      <DataChangeAlerts />
    </Styled.AlertsWrapper>
  </Styled.Alerts>
);

export default AlertPopups;