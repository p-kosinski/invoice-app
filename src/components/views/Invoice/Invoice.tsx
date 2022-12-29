import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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

  const { active } = invoicesLoading;

  return (
    <>
      <Drawer open={drawerOpen}>
        {(!active && invoices.length) && <EditInvoice />}
      </Drawer>
      <DeletionConfirmDialog />
      <AnimatePresence mode='wait'>
        <Container>
          <Styled.GoBackLinkWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <GoBackButton />
          </Styled.GoBackLinkWrapper>
          {active || !invoices.length ?
            <Skeleton
              key='statusCardSkeleton'
              variant='card'
              height='96px'
              width='100%'
            />
            :
            <InvoiceStatusCard key='statusCard' />
          }
          <Styled.InvoiceInfoWrapper>
            {active || !invoices.length ?
              <Skeleton
                key='invoiceInfoSkeleton'
                variant='card'
                height='400px'
                width='100%'
              />
              :
              <InvoiceInfo key='invoiceInfo' />
            }
          </Styled.InvoiceInfoWrapper>
        </Container>
        {(!active && invoices.length) && 
          <InvoiceActionButtons key='actionButtons' />
        }
      </AnimatePresence>
    </>
  );
};

export default Invoice;