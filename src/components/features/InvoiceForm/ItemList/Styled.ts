import styled, { css, DefaultTheme } from 'styled-components';

const ItemListWrapper = styled.div(({ theme }) => css`
  margin-block: 24px;
  padding-block: 8px;

  h5 {
    margin-bottom: 24px;

    @media only screen and (min-width: ${theme.breakpoints.sm}) {
      margin-top: 0;
      margin-bottom: 12px;
    }
  }
`);

const ItemList = styled.ul(({ theme }) => css`
  margin: 0;
  padding: 0;
  text-indent: none;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 48px;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    row-gap: 16px;
  }
`);

const ItemListTableHeadings = styled.div(({ theme }) => css`
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

const DeleteButton = styled.button(({ theme }) => css`
  border: none;
  padding: 15.5px 12px;
  background-color: transparent;
  border-radius: 4px;
  outline: 1px solid transparent;
  cursor: pointer;
  transition: outline ${theme.transitionDuration} ease-in-out;

  svg {
    display: block;
    fill: ${theme.colors.lightGrey.main};
    transition: fill ${theme.transitionDuration} ease-in-out;
  }

  &:active {
    svg {
      fill: ${theme.colors.error.main};
    }
  }

  :focus-visible {
    outline: 1px solid ${theme.colors.accent.main};
  }

  @media (hover: hover) {
    &:hover {
      svg {
        fill: ${theme.colors.error.main};
      }
    }
  }
`);

const DeleteButtonPlaceholder = styled.div`
  height: 47px;
  width: 37px;
`;

const AddItemButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Styled = {
  ItemListWrapper: ItemListWrapper,
  ItemList: ItemList,
  ItemListTableHeadings: ItemListTableHeadings,
  ItemForm: ItemForm,
  ItemNameWrapper: ItemNameWrapper,
  ItemQuantityWrapper: ItemQuantityWrapper,
  ItemPriceWrapper: ItemPriceWrapper,
  ItemTotalWrapper: ItemTotalWrapper,
  ItemDeleteWrapper: ItemDeleteWrapper,
  DeleteButton: DeleteButton,
  DeleteButtonPlaceholder: DeleteButtonPlaceholder,
  AddItemButtonWrapper: AddItemButtonWrapper,
};

export default Styled;