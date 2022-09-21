import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectStatusFilters } from '../../../redux/invoicesViewSlice';
import { selectInvoicesFilteredByStatus } from '../../../redux/invoicesSlice';
import type { StatusFiltersArray } from '../../../redux/invoicesViewSlice';
import type { InvoicesData, Status } from '../../../redux/invoicesSlice';

import Typography from '../../common/Typography/Typography';

import Styled from './Styled';

const InvoicesHeading: React.FC = () => {
  const statusFilters: StatusFiltersArray = useAppSelector(selectStatusFilters);
  const filteredInvoices: InvoicesData = useAppSelector((state) =>
    selectInvoicesFilteredByStatus(state, statusFilters)
  );

  type TextContentAdjective = Status | 'filtered' | 'total';

  const getTextContentAdjective = (
    filtersArray: StatusFiltersArray
  ): TextContentAdjective => {
    if (filtersArray.length === 1) {
      return filtersArray[0];
    } else if (filtersArray.length && filtersArray.length > 1) {
      return 'filtered';
    } else {
      return 'total';
    }
  };

  return (
    <Styled.Wrapper>
      <Typography variant='h1'>
        Invoices
      </Typography>
      <Typography variant='body1' element='p'>
        {filteredInvoices.length ? filteredInvoices.length : 'No'}
        <Styled.SpanHiddenOnMobile>
          &nbsp;{getTextContentAdjective(statusFilters)}
        </Styled.SpanHiddenOnMobile>
        &nbsp;{filteredInvoices.length === 1 ? 'invoice' : 'invoices'}
      </Typography>
    </Styled.Wrapper>
  );
};

export default InvoicesHeading;