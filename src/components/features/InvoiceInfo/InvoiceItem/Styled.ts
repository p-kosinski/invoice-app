import styled, { css } from 'styled-components';

const InvoiceItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`;

const InvoiceItemWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.text.main};
  transition: color ${theme.transitionDuration} ease-in-out;

  p {
    margin: 0;
  }

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    grid-template-rows: 1fr;
    grid-template-areas: 'name quantity price total';
  }
`);

const ItemName = styled.div(({ theme }) => css`
  @media only screen and (min-width: ${theme.breakpoints.md}) {
    grid-area: name;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`);

const QuantityAndPrice = styled.div(({ theme }) => css`
  color: ${theme.colors.text.invoiceItemAmount};
  transition: color ${theme.transitionDuration} ease-in-out;

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`);

const Quantity = styled.div(({ theme }) => css`
  display: none;

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    grid-area: quantity;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.text.secondary};
    transition: color ${theme.transitionDuration};
  }
`);

const Price = styled.div(({ theme }) => css`
  display: none;

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    grid-area: price;
    display: flex;
    justify-content: end;
    align-items: center;
    color: ${theme.colors.text.secondary};
    transition: color ${theme.transitionDuration};
  }
`);

const Total = styled.div(({ theme }) => css`
  @media only screen and (min-width: ${theme.breakpoints.md}) {
    grid-area: total;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`);

const Styled = {
  InvoiceItem: InvoiceItem,
  InvoiceItemWrapper: InvoiceItemWrapper,
  ItemName: ItemName,
  QuantityAndPrice: QuantityAndPrice,
  Quantity: Quantity,
  Price: Price,
  Total: Total
};

export default Styled;