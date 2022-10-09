import styled, { css } from 'styled-components';

const TableHeadings = styled.div(({ theme }) => css`
  display: none;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    display: block;
    color: ${theme.colors.text.secondary};
    transition: color ${theme.transitionDuration} ease-in-out;
  }
`);

const HeadingsWrapper = styled.div(({ theme }) => css`
  display: none;

  p {
    margin: 0;
  }

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    grid-template-rows: 1fr;
    grid-template-areas: 'name quantity price total';
  }
`);

const ItemName = styled.div(({ theme }) => css`
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    grid-area: name;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`);

const Quantity = styled.div(({ theme }) => css`
  display: none;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
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

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    grid-area: price;
    display: flex;
    justify-content: end;
    align-items: center;
    color: ${theme.colors.text.secondary};
    transition: color ${theme.transitionDuration};
  }
`);

const Total = styled.div(({ theme }) => css`
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    grid-area: total;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`);

const Styled = {
  TableHeadings: TableHeadings,
  HeadingsWrapper: HeadingsWrapper,
  ItemName: ItemName,
  Quantity: Quantity,
  Price: Price,
  Total: Total
};

export default Styled;