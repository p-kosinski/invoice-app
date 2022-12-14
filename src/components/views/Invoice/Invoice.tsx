import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';

import { selectDrawerOpen } from '../../../redux/invoiceViewSlice';
import {
  selectInvoicesData,
  selectInvoicesLoadingState,
  fetchInvoiceDataById
} from '../../../redux/invoicesSlice';
import type { InvoicesData, ThunkStatusState } from '../../../redux/invoicesSlice';

import { assertNotUndefined } from '../../../utils/typeUtils';

import Container from '../../layout/Container/Container';
import GoBackButton from '../../common/GoBackButton/GoBackButton';
import InvoiceInfo from '../../features/InvoiceInfo/InvoiceInfo';
import InvoiceStatusCard from '../../features/InvoiceStatusCard/InvoiceStatusCard';
import InvoiceActionButtons from '../../features/InvoiceActionButtons/InvoiceActionButtons';
import DeletionConfirmDialog from '../../features/DeletionConfirmDialog/DeletionConfirmDialog';
import Drawer from '../../layout/Drawer/Drawer';
import EditInvoice from '../../features/EditInvoice/EditInvoice';
import Skeleton from '../../common/Skeleton/Skeleton';

import Styled from './Styled';

const Invoice: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  assertNotUndefined(id);

  const dispatch = useAppDispatch();

  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const invoices: InvoicesData = useAppSelector(selectInvoicesData);
  const invoicesLoading: ThunkStatusState = useAppSelector(selectInvoicesLoadingState);

  useEffect(() => {
    !invoices.length && dispatch(fetchInvoiceDataById(id));
  }, [invoices.length]);

  return (
    <>
      <Drawer open={drawerOpen}>
        {(!invoicesLoading.active && invoices.length) && <EditInvoice />}
      </Drawer>
      <DeletionConfirmDialog />
      <Container>
        <Styled.GoBackLinkWrapper>
          <GoBackButton />
        </Styled.GoBackLinkWrapper>
          {invoicesLoading.active || !invoices.length ?
            <Skeleton variant='card' height='96px' width='100%' />
            :
            <InvoiceStatusCard />
          }
        <Styled.InvoiceInfoWrapper>
          {invoicesLoading.active || !invoices.length ?
            <Skeleton variant='card' height='400px' width='100%' />
            :
            <InvoiceInfo />
          }
        </Styled.InvoiceInfoWrapper>
      </Container>
      {(!invoicesLoading.active && invoices.length) && <InvoiceActionButtons />}
    </>
  );
};

export default Invoice;