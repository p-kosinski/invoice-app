import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  fetchInvoicesData,
  selectInvoicesData,
  selectInvoicesLoadingState
} from '../../../redux/invoicesSlice';
import type { InvoicesData, ThunkStatusState } from '../../../redux/invoicesSlice';

import NewInvoice from '../NewInvoice/NewInvoice';
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
  const invoicesLoading: ThunkStatusState = useAppSelector(selectInvoicesLoadingState);

  useEffect(() => {
    !invoices.length && dispatch(fetchInvoicesData());
  }, [invoices.length]);

  return (
    <>
      <NewInvoice />
      <Container>
        <section>
          <Styled.HeadingWrapper>
            <InvoicesHeading />
            <Styled.ButtonsWrapper>
              <InvoicesStatusFilters />
              <NewInvoiceButton />
            </Styled.ButtonsWrapper>
          </Styled.HeadingWrapper>
          <Styled.InvoicesWrapper>
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
          </Styled.InvoicesWrapper>
        </section>
      </Container>
    </>
  );
};

export default Invoices;