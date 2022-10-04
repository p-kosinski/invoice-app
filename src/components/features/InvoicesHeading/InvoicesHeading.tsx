import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectStatusFilters } from '../../../redux/invoicesViewSlice';
import {
  selectInvoicesData,
  selectInvoicesLoadingState,
  selectInvoicesFilteredByStatus
} from '../../../redux/invoicesSlice';
import type { StatusFiltersArray } from '../../../redux/invoicesViewSlice';
import type {
  InvoicesData,
  LoadingState,
  Status,
} from '../../../redux/invoicesSlice';

import Typography from '../../common/Typography/Typography';
import Skeleton from '../../common/Skeleton/Skeleton';

import Styled from './Styled';

const InvoicesHeading: React.FC = () => {
  const statusFilters: StatusFiltersArray = useAppSelector(selectStatusFilters);
  const invoices: InvoicesData = useAppSelector(selectInvoicesData);
  const invoicesLoading: LoadingState = useAppSelector(
    selectInvoicesLoadingState
  );
  const filteredInvoices: InvoicesData = useAppSelector((state) =>
    selectInvoicesFilteredByStatus(state, statusFilters)
  );

  type TextContentAdjective = '' | Status | 'filtered' | 'total';

  const getTextContentAdjective = (
    filtersArray: StatusFiltersArray,
    invoices: InvoicesData
  ): TextContentAdjective => {
    switch (true) {
      case !invoices.length:
        return '';
      case filtersArray.length === 1:
        return filtersArray[0];
      case filtersArray.length > 1:
        return 'filtered';
      case filtersArray.length > 1:
        return 'filtered';
      case !filtersArray.length:
        return 'total';
      default:
        return '';
    }
  };

  return (
    <Styled.Wrapper>
      <Typography variant='h1'>
        Invoices
      </Typography>
      {invoicesLoading.active ?
        <Skeleton variant='text' height='12px' width='75px' />
        :
        <Typography variant='body1' element='p'>
          {filteredInvoices.length ? filteredInvoices.length : 'No'}
          <Styled.SpanHiddenOnMobile>
            {invoices.length ? ' ' : ''}
            {getTextContentAdjective(statusFilters, invoices)}
          </Styled.SpanHiddenOnMobile>
          &nbsp;{filteredInvoices.length === 1 ? 'invoice' : 'invoices'}
        </Typography>
      }
    </Styled.Wrapper>
  );
};

export default InvoicesHeading;