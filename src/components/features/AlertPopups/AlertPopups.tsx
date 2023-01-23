import LoadingAlerts from './LoadingAlerts/LoadingAlerts';
import StatusChangeAlerts from './StatusChangeAlerts/StatusChangeAlerts';
import DataChangeAlerts from './DataChangeAlerts/DataChangeAlerts';
import DeletionAlerts from './DeletionAlerts/DeletionAlerts';
import SavingAlerts from './SavingAlerts/SavingAlerts';

import Styled from './Styled';

const AlertPopups: React.FC = () => (
  <Styled.Alerts>
    <Styled.AlertsWrapper>
      <LoadingAlerts />
      <StatusChangeAlerts />
      <DataChangeAlerts />
      <DeletionAlerts />
      <SavingAlerts />
    </Styled.AlertsWrapper>
  </Styled.Alerts>
);

export default AlertPopups;