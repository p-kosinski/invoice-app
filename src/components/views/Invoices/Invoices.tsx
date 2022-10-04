import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  fetchInvoicesData,
  selectInvoicesData,
  selectInvoicesLoadingState
} from '../../../redux/invoicesSlice';
import type { InvoicesData, LoadingState } from '../../../redux/invoicesSlice';

import InvoicesHeading from '../../features/InvoicesHeading/InvoicesHeading';
import InvoicesStatusFilters from '../../features/InvoicesStatusFilters/InvoicesStatusFilters';
import NewInvoiceLink from '../../common/NewInvoiceLink/NewInvoiceLink';
import Skeleton from '../../common/Skeleton/Skeleton';
import NoInvoicesInfo from '../../features/NoInvoicesInfo/NoInvoicesInfo';
import InvoicesList from '../../features/InvoicesList/InvoicesList';

import Styled from './Styled';

const Invoices: React.FC = () => {
  const dispatch = useAppDispatch();

  const invoices: InvoicesData = useAppSelector(selectInvoicesData);
  const invoicesLoading: LoadingState = useAppSelector(selectInvoicesLoadingState);

  useEffect(() => {
    !invoices.length && dispatch(fetchInvoicesData());
  }, [invoices.length]);

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
        {invoicesLoading.active ?
          <>
            <Skeleton variant='invoiceTile' />
            <Skeleton variant='invoiceTile' />
            <Skeleton variant='invoiceTile' />
          </>
          :
          <>
            {!invoices.length ?
              <NoInvoicesInfo />
              :
              <InvoicesList />
            }
          </>
        }
      </Styled.InvoicesWrapper>
    </section>
  );
};

export default Invoices;