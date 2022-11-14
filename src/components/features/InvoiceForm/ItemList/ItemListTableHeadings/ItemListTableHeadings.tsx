import styled, { css } from 'styled-components';

import Typography from '../../../../common/Typography/Typography';

import Styled from '../Item/Styled';

const TableHeadingsGrid = styled.div(({ theme }) => css`
  display: none;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    display: grid;
    grid-template-columns: 0.4fr 0.15fr 0.2fr 0.2fr 0.05fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'itemName itemQuantity itemPrice itemTotal itemDelete';
    color: ${theme.colors.formElements.labelsText};
    transition: color ${theme.transitionDuration} ease-in-out;
  }
`);

const DeleteButtonPlaceholder = styled.div`
  height: 47px;
  width: 37px;
`;

const ItemListTableHeadings: React.FC = () => (
  <TableHeadingsGrid>
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
  </TableHeadingsGrid>
);

export default ItemListTableHeadings;