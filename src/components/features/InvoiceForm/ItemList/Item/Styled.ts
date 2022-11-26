import styled, { css, DefaultTheme } from 'styled-components';

const ItemForm = styled.form(({ theme }) => css`
  display: grid;
  grid-template-columns: 0.6fr 1fr 1fr 0.6fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'itemName itemName itemName itemName'
    'itemQuantity itemPrice itemTotal itemDelete';
  column-gap: 16px;
  row-gap: 24px;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 0.4fr 0.15fr 0.2fr 0.2fr 0.05fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'itemName itemQuantity itemPrice itemTotal itemDelete';
  }
`);

const ItemNameWrapper = styled.div`
  grid-area: itemName;
`;

const ItemQuantityWrapper = styled.div`
  grid-area: itemQuantity;
`;

const ItemPriceWrapper = styled.div`
  grid-area: itemPrice;
`;

type ItemTotalWrapperProps = {
  theme: DefaultTheme;
  $showLabel?: boolean;
};

const ItemTotalWrapper = styled.div<ItemTotalWrapperProps>(
  ({ theme, $showLabel }) => css`
    grid-area: itemTotal;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p:first-of-type {
      margin-top: 3px;
      color: ${theme.colors.formElements.labelsText};
      transition: color ${theme.transitionDuration} ease-in-out;

      ${!$showLabel && `
        @media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: none;
        }
      `}
      
    }

    p:not(:first-of-type) {
      color: ${theme.colors.lightGrey.main};
    }
  `
);

const ItemDeleteWrapper = styled.div`
  grid-area: itemDelete;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const Styled = {
  ItemForm: ItemForm,
  ItemNameWrapper: ItemNameWrapper,
  ItemQuantityWrapper: ItemQuantityWrapper,
  ItemPriceWrapper: ItemPriceWrapper,
  ItemTotalWrapper: ItemTotalWrapper,
  ItemDeleteWrapper: ItemDeleteWrapper
};

export default Styled;