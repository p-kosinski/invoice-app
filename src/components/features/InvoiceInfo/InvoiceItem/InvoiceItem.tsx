import { parsePriceToGBP } from '../../../../utils/priceUtils';

import Typography from '../../../common/Typography/Typography';

import Styled from './Styled';

type Props = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

const InvoiceItem: React.FC<Props> = ({ name, quantity, price, total }) => (
  <Styled.InvoiceItem>
    <Styled.InvoiceItemWrapper>
      <Styled.ItemName>
        <Typography variant='h4' element='span'>
          {name}
        </Typography>
        <Styled.QuantityAndPrice>
          <Typography variant='h4' element='span'>
            {`${quantity} x ${parsePriceToGBP(price)}`}
          </Typography>
        </Styled.QuantityAndPrice>
      </Styled.ItemName>
      <Styled.Quantity>
        <Typography variant='h4' element='span'>
          {quantity}
        </Typography>
      </Styled.Quantity>
      <Styled.Price>
        <Typography variant='h4' element='span'>
          {parsePriceToGBP(price)}
        </Typography>
      </Styled.Price>
      <Styled.Total>
        <Typography variant='h4' element='span'>
          {parsePriceToGBP(total)}
        </Typography>
      </Styled.Total>
    </Styled.InvoiceItemWrapper>
  </Styled.InvoiceItem>
);

export default InvoiceItem;