import styled from 'styled-components';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectStatusFilters } from '../../../redux/invoicesViewSlice';
import { selectInvoicesFilteredByStatus } from '../../../redux/invoicesSlice';
import type { StatusFiltersArray } from '../../../redux/invoicesViewSlice';
import type { InvoicesData } from '../../../redux/invoicesSlice';

import InvoiceSummaryTile from '../../features/InvoiceSummaryTile/InvoiceSummaryTile';

const StyledInvoicesList = styled.ul`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline-start: 0;
`;

const InvoicesList: React.FC = () => {
  const statusFilters: StatusFiltersArray = useAppSelector(selectStatusFilters);
  const filteredInvoices: InvoicesData = useAppSelector((state) =>
    selectInvoicesFilteredByStatus(state, statusFilters)
  );

  return (
    <StyledInvoicesList>
      {filteredInvoices.map((invoice, i) => (
        <li key={i}>
          <InvoiceSummaryTile id={invoice.id} />
        </li>
      ))}
    </StyledInvoicesList>
  );
};

export default InvoicesList;