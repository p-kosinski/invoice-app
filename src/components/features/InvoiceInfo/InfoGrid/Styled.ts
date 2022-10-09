import styled, { css } from 'styled-components';

const InfoGrid = styled.div(({ theme }) => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'id id'
    'senderAddress senderAddress'
    'senderAddress senderAddress'
    'senderAddress senderAddress'
    'date clientAddress'
    'paymentDue clientAddress'
    'paymentDue clientAddress'
    'email email'
    'email email';

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 24px;
    grid-template-areas:
      'id id id senderAddress senderAddress senderAddress'
      'id id id senderAddress senderAddress senderAddress'
      'id id id senderAddress senderAddress senderAddress'
      'date . clientAddress . email email'
      'date . clientAddress . email email'
      'paymentDue . clientAddress . . .'
      'paymentDue . clientAddress . . .';
  }
`);

const IdWrapper = styled.div(({ theme }) => css`
  grid-area: id;
  color: ${theme.colors.text.main};
  transition: color ${theme.transitionDuration} ease-in-out;

  p {
    margin: 0;

    &:last-of-type {
      margin-top: 8px;
      color: ${theme.colors.text.secondary};
      transition: color ${theme.transitionDuration} ease-in-out;
    }
  }
`);

const IdHash = styled.span(({ theme }) => css`
  color: ${theme.colors.lightGrey.main};
`);

const SenderAddressWrapper = styled.div(({ theme }) => css`
  grid-area: senderAddress;
  display: flex;
  align-items: center;

  p {
    margin: 0;
    color: ${theme.colors.text.secondary};
    transition: color ${theme.transitionDuration} ease-in-out;
  }

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    align-items: start;
    justify-content: end;

    p {
      text-align: end;
    }
  }
`);

const InvoiceDateWrapper = styled.div(({ theme }) => css`
  grid-area: date;
  display: flex;
  flex-direction: column;
  justify-content: start;

  p {
    margin: 0;

    &:first-of-type {
      margin-bottom: 12px;
      color: ${theme.colors.text.secondary};
      transition: color ${theme.transitionDuration} ease-in-out;
    }

    strong {
      white-space: nowrap;
    }
  }
`);

const PaymentDueWrapper = styled.div(({ theme }) => css`
  grid-area: paymentDue;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 0;

    &:first-of-type {
      margin-bottom: 12px;
      color: ${theme.colors.text.secondary};
      transition: color ${theme.transitionDuration} ease-in-out;
    }

    strong {
      white-space: nowrap;
    }
  }

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    justify-content: start;
  }
`);

const ClientAddressWrapper = styled.div(({ theme }) => css`
  grid-area: clientAddress;
  display: flex;
  align-items: start;
`);

const ClientAddress = styled.div(({ theme }) => css`
  color: ${theme.colors.text.secondary};
  transition: color ${theme.transitionDuration} ease-in-out;

  p {
    margin: 0;

    &:first-of-type {
      margin-bottom: 12px;
    }

    &:last-of-type {
      margin-top: 8px;
    }
  }
`);

const ClientEmailWrapper = styled.div(({ theme }) => css`
  grid-area: email;
  display: flex;
  flex-direction: column;
  justify-content: start;

  p {
    margin: 0;

    &:first-of-type {
      margin-bottom: 12px;
      color: ${theme.colors.text.secondary};
      transition: color ${theme.transitionDuration} ease-in-out;
    }
  }
`);

const ImportantText = styled.p(({ theme }) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3125px;
  color: ${theme.colors.text.main};
  transition: color ${theme.transitionDuration} ease-in-out;

  strong {
    font-weight: inherit;
  }
`);

const Styled = {
  InfoGrid: InfoGrid,
  IdWrapper: IdWrapper,
  IdHash: IdHash,
  SenderAddressWrapper: SenderAddressWrapper,
  InvoiceDateWrapper: InvoiceDateWrapper,
  PaymentDueWrapper: PaymentDueWrapper,
  ClientAddressWrapper: ClientAddressWrapper,
  ClientAddress: ClientAddress,
  ClientEmailWrapper: ClientEmailWrapper,
  ImportantText: ImportantText
};

export default Styled;