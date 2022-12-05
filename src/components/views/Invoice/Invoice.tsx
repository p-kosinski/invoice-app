import { useAppSelector } from '../../../hooks/reduxHooks';

import { selectDrawerOpen } from '../../../redux/invoiceViewSlice';

import Container from '../../layout/Container/Container';
import GoBackButton from '../../common/GoBackButton/GoBackButton';
import InvoiceInfo from '../../features/InvoiceInfo/InvoiceInfo';
import InvoiceStatusCard from '../../features/InvoiceStatusCard/InvoiceStatusCard';
import InvoiceActionButtons from '../../features/InvoiceActionButtons/InvoiceActionButtons';
import DeletionConfirmDialog from '../../features/DeletionConfirmDialog/DeletionConfirmDialog';
import Drawer from '../../layout/Drawer/Drawer';
import EditInvoice from '../../features/EditInvoice/EditInvoice';

import Styled from './Styled';

const Invoice: React.FC = () => {
  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  return (
    <>
      <Drawer open={drawerOpen}>
        <EditInvoice />
      </Drawer>
      <DeletionConfirmDialog />
      <Container>
        <Styled.GoBackLinkWrapper>
          <GoBackButton />
        </Styled.GoBackLinkWrapper>
        <InvoiceStatusCard />
        <Styled.InvoiceInfoWrapper>
          <InvoiceInfo />
        </Styled.InvoiceInfoWrapper>
      </Container>
      <InvoiceActionButtons />
    </>
  );
};

export default Invoice;