import Typography from '../../../common/Typography/Typography';

import Styled from './Styled';

const TableHeadings: React.FC = () => (
  <Styled.TableHeadings>
    <Styled.HeadingsWrapper>
      <Styled.ItemName>
        <Typography variant='body2' element='span'>
          Item Name
        </Typography>
      </Styled.ItemName>
      <Styled.Quantity>
        <Typography variant='body2' element='span'>
          QTY.
        </Typography>
      </Styled.Quantity>
      <Styled.Price>
        <Typography variant='body2' element='span'>
          Price
        </Typography>
      </Styled.Price>
      <Styled.Total>
        <Typography variant='body2' element='span'>
          Total
        </Typography>
      </Styled.Total>
    </Styled.HeadingsWrapper>
  </Styled.TableHeadings>
);

export default TableHeadings;