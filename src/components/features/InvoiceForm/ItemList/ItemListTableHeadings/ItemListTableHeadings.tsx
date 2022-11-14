import styled from 'styled-components';

import Typography from '../../../../common/Typography/Typography';

import Styled from '../Styled';

const DeleteButtonPlaceholder = styled.div`
  height: 47px;
  width: 37px;
`;

const ItemListTableHeadings: React.FC = () => (
  <Styled.ItemListTableHeadings>
    <Styled.ItemNameWrapper>
      <Typography variant='body1' element='p'>
        Item Name
      </Typography>
    </Styled.ItemNameWrapper>
    <Styled.ItemQuantityWrapper>
      <Typography variant='body1' element='p'>
        Qty.
      </Typography>
    </Styled.ItemQuantityWrapper>
    <Styled.ItemPriceWrapper>
      <Typography variant='body1' element='p'>
        Price
      </Typography>
    </Styled.ItemPriceWrapper>
    <Styled.ItemTotalWrapper $showLabel>
      <Typography variant='body1' element='p'>
        Total
      </Typography>
    </Styled.ItemTotalWrapper>
    <Styled.ItemDeleteWrapper>
      <DeleteButtonPlaceholder />
    </Styled.ItemDeleteWrapper>
  </Styled.ItemListTableHeadings>
);

export default ItemListTableHeadings;