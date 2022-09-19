import styled, { css } from 'styled-components';

const Wrapper = styled.div(({ theme }) => css`
  padding: 24px;

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 16px 24px;
  }
`);

const GridWrapper = styled.div(({ theme }) => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.25fr 1.25fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'id client'
    'id client'
    'due status'
    'due status'
    'total status'
    'total status';

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    display: grid; 
    grid-template-columns: max-content max-content 1fr 1fr max-content;
    grid-template-rows: 1fr;
    column-gap: 45px;
    grid-template-areas: 'id due client total status';
  }
`);

const IdWrapper = styled.div(({ theme }) => css`
  grid-area: id;
  display: flex;
  align-items: start;

  span {
    line-height: inherit;
  }

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    align-items: center;
  }
`);

const IdHash = styled.span(({ theme }) => css`
  color: ${theme.colors.grey.light};
`);

const Id = styled.span(({ theme }) => css`
  color: ${theme.colors.text.main};
  transition: color ${theme.transitionDuration} ease-in-out;
`);

const ClientNameWrapper = styled.div(({ theme }) => css`
  grid-area: client;
  display: flex;
  justify-content: end;
  align-items: start;
  color: ${theme.colors.text.invoiceTile.clientName};
  transition: color ${theme.transitionDuration} ease-in-out;

  span {
    line-height: inherit;
  }

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: start;
    align-items: center;
  }
`);

const PaymentDueWrapper = styled.div(({ theme }) => css`
  grid-area: due;
  display: flex;
  align-items: center;
  color: ${theme.colors.text.invoiceTile.dueDate};
  transition: color ${theme.transitionDuration} ease-in-out;

  span {
    line-height: inherit;
  }
`);

const TotalPriceWrapper = styled.div(({ theme }) => css`
  grid-area: total;
  display: flex;
  align-items: center;
  color: ${theme.colors.text.main};
  transition: color ${theme.transitionDuration} ease-in-out;

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: end;
    align-items: center;
  }
`);

const StatusChipWrapper = styled.div(({ theme }) => css`
  grid-area: status;
  display: flex;
  justify-content: end;

  svg {
    display: none;
  }

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
    align-items: center;

    svg {
      display: block;
      margin-left: 24px;
    }
  }
`);

const Styled = {
  Wrapper: Wrapper,
  GridWrapper: GridWrapper,
  IdWrapper: IdWrapper,
  IdHash: IdHash,
  Id: Id,
  ClientNameWrapper: ClientNameWrapper,
  PaymentDueWrapper: PaymentDueWrapper,
  TotalPriceWrapper: TotalPriceWrapper,
  StatusChipWrapper: StatusChipWrapper
};

export default Styled;