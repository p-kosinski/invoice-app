import { AnimatePresence } from 'framer-motion';

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
  ThunkStatusState,
  Status,
} from '../../../redux/invoicesSlice';

import Typography from '../../common/Typography/Typography';
import Skeleton from '../../common/Skeleton/Skeleton';
import AnimateMount from '../../common/AnimateMount/AnimateMount';

import Styled from './Styled';

const InvoicesHeading: React.FC = () => {
  const statusFilters: StatusFiltersArray = useAppSelector(selectStatusFilters);
  const invoices: InvoicesData = useAppSelector(selectInvoicesData);
  const invoicesLoading: ThunkStatusState = useAppSelector(
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
      <AnimatePresence mode='wait'>
        {invoicesLoading.active ?
          <Skeleton variant='text' height='12px' width='75px' />
          :
          <AnimateMount variant='fade'>
            <Typography variant='body1' element='p'>
              {filteredInvoices.length ? filteredInvoices.length : 'No'}
              <Styled.SpanHiddenOnMobile>
                {invoices.length ? ' ' : ''}
                {getTextContentAdjective(statusFilters, invoices)}
              </Styled.SpanHiddenOnMobile>
              &nbsp;{filteredInvoices.length === 1 ? 'invoice' : 'invoices'}
            </Typography>
          </AnimateMount>
        }
      </AnimatePresence>
    </Styled.Wrapper>
  );
};

export default InvoicesHeading;