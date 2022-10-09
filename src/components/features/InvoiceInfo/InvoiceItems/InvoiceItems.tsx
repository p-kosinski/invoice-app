import Typography from '../../../common/Typography/Typography';
import TableHeadings from '../TableHeadings/TableHeadings';
import InvoiceItem from '../InvoiceItem/InvoiceItem';

import Styled from './Styled';

const InvoiceItems: React.FC = () => (
  <Styled.InvoiceItems>
    <Styled.ItemsList>
      <TableHeadings />
      <InvoiceItem
        name='Banner Design'
        quantity={1}
        price={156.00}
        total={156.00}
      />
      <InvoiceItem
        name='Email Design'
        quantity={2}
        price={200.00}
        total={400.00}
      />
    </Styled.ItemsList>
    <Styled.InvoiceTotal>
      <Styled.InvoiceTotalWrapper>
        <Typography variant='body2' element='span'>
          Amount Due
        </Typography>
        <Styled.AmountDue>
          £ 556.00
        </Styled.AmountDue>
      </Styled.InvoiceTotalWrapper>
    </Styled.InvoiceTotal>
  </Styled.InvoiceItems>
);

export default InvoiceItems;