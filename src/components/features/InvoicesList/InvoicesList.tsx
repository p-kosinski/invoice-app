import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

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
      <AnimatePresence>
        {filteredInvoices.map((invoice, i) => (
          <motion.li
            key={invoice.id}
            layout='position'
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <InvoiceSummaryTile id={invoice.id} />
          </motion.li>
        ))}
      </AnimatePresence>
    </StyledInvoicesList>
  );
};

export default InvoicesList;