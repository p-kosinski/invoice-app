import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  fetchInvoicesData,
  selectInvoicesData,
  selectInvoicesLoadingState
} from '../../../redux/invoicesSlice';
import { selectStatusFilters } from '../../../redux/invoicesViewSlice';
import { selectInvoicesFilteredByStatus } from '../../../redux/invoicesSlice';
import type { StatusFiltersArray } from '../../../redux/invoicesViewSlice';
import type { InvoicesData, LoadingState } from '../../../redux/invoicesSlice';

import InvoicesHeading from '../../features/InvoicesHeading/InvoicesHeading';
import InvoicesStatusFilters from '../../features/InvoicesStatusFilters/InvoicesStatusFilters';
import NewInvoiceLink from '../../common/NewInvoiceLink/NewInvoiceLink';
import InvoiceSummaryTile from '../../features/InvoiceSummaryTile/InvoiceSummaryTile';
import NoInvoicesInfo from './NoInvoicesInfo/NoInvoicesInfo';
import Skeleton from '../../common/Skeleton/Skeleton';

import Styled from './Styled';

const Invoices: React.FC = () => {
  const dispatch = useAppDispatch();

  const invoices: InvoicesData = useAppSelector(selectInvoicesData);
  const invoicesLoading: LoadingState = useAppSelector(selectInvoicesLoadingState);
  const statusFilters: StatusFiltersArray = useAppSelector(selectStatusFilters);
  const filteredInvoices: InvoicesData = useAppSelector((state) =>
    selectInvoicesFilteredByStatus(state, statusFilters)
  );

  useEffect(() => {
    !invoices.length && dispatch(fetchInvoicesData());
  }, [invoices.length]);

  const { active } = invoicesLoading;

  return (
    <section>
      <Styled.HeadingWrapper>
        <InvoicesHeading />
        <Styled.ButtonsWrapper>
          <InvoicesStatusFilters />
          <NewInvoiceLink />
        </Styled.ButtonsWrapper>
      </Styled.HeadingWrapper>
      <Styled.InvoicesWrapper>
        {active &&
          <>
            <Skeleton variant='invoiceTile' />
            <Skeleton variant='invoiceTile' />
            <Skeleton variant='invoiceTile' />
          </>
        }
        {!active && !invoices.length ?
          <NoInvoicesInfo />
          :
          filteredInvoices.map((invoice, i) => (
            <InvoiceSummaryTile key={i} id={invoice.id} />
          ))
        }
      </Styled.InvoicesWrapper>
    </section>
  );
};

export default Invoices;