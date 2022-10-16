import styled, { css } from 'styled-components';

const InvoiceItems = styled.section`
  margin-top: 40px;
  border-radius: 8px;
  overflow: hidden;
`;

const ItemsList = styled.ul(({ theme }) => css`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  padding: 24px;
  background-color: ${theme.colors.backgrounds.cardInner};
  transition: background-color ${theme.transitionDuration} ease-in-out;
`);

const InvoiceTotal = styled.div(({ theme }) => css`
  padding: 24px;
  background-color: ${theme.colors.backgrounds.invoiceTotal};
  transition: background-color ${theme.transitionDuration} ease-in-out;
`);

const InvoiceTotalWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.neutral.white};

  p {
    margin: 0;
  }
`);

const AmountDue = styled.p(({ theme }) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.l};
  line-height: 32px;
  letter-spacing: -0.417px;
`);

const Styled = {
  InvoiceItems: InvoiceItems,
  ItemsList: ItemsList,
  InvoiceTotal: InvoiceTotal,
  InvoiceTotalWrapper: InvoiceTotalWrapper,
  AmountDue: AmountDue
};

export default Styled;