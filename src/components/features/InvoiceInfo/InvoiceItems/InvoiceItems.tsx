import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../hooks/reduxHooks';
import {
  selectInvoiceItemsById,
  selectInvoiceTotalById
} from '../../../../redux/invoicesSlice';
import type { ItemsArray } from '../../../../redux/invoicesSlice';

import { assertNotUndefined } from '../../../../utils/typeUtils';
import { parsePriceToGBP } from '../../../../utils/priceUtils';

import Typography from '../../../common/Typography/Typography';
import TableHeadings from '../TableHeadings/TableHeadings';
import InvoiceItem from '../InvoiceItem/InvoiceItem';

import Styled from './Styled';

const InvoiceItems: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  assertNotUndefined(id);

  const items: ItemsArray = useAppSelector((state) => 
    selectInvoiceItemsById(state, id)
  );

  const total: number = useAppSelector((state) => 
    selectInvoiceTotalById(state, id)
  );

  return (
    <Styled.InvoiceItems>
      <Styled.ItemsList>
        <TableHeadings />
        {items.map((item, i) => (
          <InvoiceItem
            key={i}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            total={item.total}
          />
        ))}
      </Styled.ItemsList>
      <Styled.InvoiceTotal>
        <Styled.InvoiceTotalWrapper>
          <Typography variant='body2' element='span'>
            Amount Due
          </Typography>
          <Styled.AmountDue>
            {parsePriceToGBP(total)}
          </Styled.AmountDue>
        </Styled.InvoiceTotalWrapper>
      </Styled.InvoiceTotal>
    </Styled.InvoiceItems>
  );
};

export default InvoiceItems;