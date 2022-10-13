import Container from '../../layout/Container/Container';
import GoBackLink from '../../common/GoBackLink/GoBackLink';
import InvoiceInfo from '../../features/InvoiceInfo/InvoiceInfo';
import InvoiceStatusCard from '../../features/InvoiceStatusCard/InvoiceStatusCard';
import InvoiceActionButtons from '../../features/InvoiceActionButtons/InvoiceActionButtons';
import DeletionConfirmDialog from '../../features/DeletionConfirmDialog/DeletionConfirmDialog';

import Styled from './Styled';

const Invoice: React.FC = () => (
  <>
    <DeletionConfirmDialog />
    <Container>
      <Styled.GoBackLinkWrapper>
        <GoBackLink />
      </Styled.GoBackLinkWrapper>
      <InvoiceStatusCard />
      <Styled.InvoiceInfoWrapper>
        <InvoiceInfo />
      </Styled.InvoiceInfoWrapper>
    </Container>
    <InvoiceActionButtons />
  </>
);

export default Invoice;