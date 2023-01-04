import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  fetchInvoicesData,
  selectInvoicesData,
  selectInvoicesLoadingState
} from '../../../redux/invoicesSlice';
import type { InvoicesData, ThunkStatusState } from '../../../redux/invoicesSlice';
import { selectDrawerOpen } from '../../../redux/invoicesViewSlice';

import Drawer from '../../layout/Drawer/Drawer';
import NewInvoice from '../../features/NewInvoice/NewInvoice';
import Container from '../../layout/Container/Container';
import InvoicesHeading from '../../features/InvoicesHeading/InvoicesHeading';
import InvoicesStatusFilters from '../../features/InvoicesStatusFilters/InvoicesStatusFilters';
import NewInvoiceButton from '../../features/NewInvoiceButton/NewInvoiceButton';
import Skeleton from '../../common/Skeleton/Skeleton';
import NoInvoicesInfo from '../../features/NoInvoicesInfo/NoInvoicesInfo';
import InvoicesList from '../../features/InvoicesList/InvoicesList';

import Styled from './Styled';

const Invoices: React.FC = () => {
  const dispatch = useAppDispatch();

  const invoices: InvoicesData = useAppSelector(selectInvoicesData);
  const invoicesLoading: ThunkStatusState = useAppSelector(
    selectInvoicesLoadingState
  );

  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  useEffect(() => {
    invoices.length <= 1 && dispatch(fetchInvoicesData());
  }, [invoices.length]);

  return (
    <>
      <Drawer open={drawerOpen}>
        <NewInvoice />
      </Drawer>
      <Container>
        <section>
          <AnimatePresence>
            <Styled.HeadingWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <InvoicesHeading />
              <Styled.ButtonsWrapper>
                <InvoicesStatusFilters />
                <NewInvoiceButton />
              </Styled.ButtonsWrapper>
            </Styled.HeadingWrapper>
          </AnimatePresence>
          <Styled.InvoicesWrapper>
            <AnimatePresence mode='wait'>
              {invoicesLoading.active ?
                <>
                  <Skeleton variant='invoiceTile' />
                  <Skeleton variant='invoiceTile' />
                  <Skeleton variant='invoiceTile' />
                </>
                :
                <>
                  {!invoices.length ? <NoInvoicesInfo /> : <InvoicesList />}
                </>
              }
            </AnimatePresence>
          </Styled.InvoicesWrapper>
        </section>
      </Container>
    </>
  );
};

export default Invoices;