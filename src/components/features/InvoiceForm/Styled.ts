import styled, { css } from 'styled-components';

const Fieldset = styled.fieldset(({ theme }) => css`
  border: none;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  min-inline-size: 0;
  margin-block: 32px;
  padding-block: 8px;
  display: grid;
  gap: 24px;
`);

const BillFromFieldset = styled(Fieldset)(({ theme }) => css`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    'streetAddress streetAddress'
    'city postCode'
    'country country';

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
      'streetAddress streetAddress streetAddress'
      'city postCode country';
  }
`);

const BillToFieldset = styled(Fieldset)(({ theme }) => css`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'name name'
    'email email'
    'streetAddress streetAddress'
    'city postCode'
    'country country';

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'name name name'
      'email email email'
      'streetAddress streetAddress streetAddress'
      'city postCode country';
  }
`);

const DetailsFieldset = styled(Fieldset)(({ theme }) => css`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'date paymentTerms'
      'description description';
  }
`);

const Legend = styled.legend(({ theme }) => css`
  color: ${theme.colors.accent.main};
  margin-bottom: 12px;
`);

const NameWrapper = styled.div`
  grid-area: name;
`;

const EmailWrapper = styled.div`
  grid-area: email;
`;

const StreetAddressWrapper = styled.div`
  grid-area: streetAddress;
`;

const CityWrapper = styled.div`
  grid-area: city;
`;

const PostCodeWrapper = styled.div`
  grid-area: postCode;
`;

const CountryWrapper = styled.div`
  grid-area: country;
`;

const DateWrapper = styled.div`
  grid-area: date;
`;

const PaymentTermsWrapper = styled.div`
  grid-area: paymentTerms;
`;

const DescriptionWrapper = styled.div`
  grid-area: description;
`;

const Styled = {
  Fieldset: Fieldset,
  BillFromFieldset: BillFromFieldset,
  BillToFieldset: BillToFieldset,
  DetailsFieldset: DetailsFieldset,
  Legend: Legend,
  NameWrapper: NameWrapper,
  EmailWrapper: EmailWrapper,
  StreetAddressWrapper: StreetAddressWrapper,
  CityWrapper: CityWrapper,
  PostCodeWrapper: PostCodeWrapper,
  CountryWrapper: CountryWrapper,
  DateWrapper: DateWrapper,
  PaymentTermsWrapper: PaymentTermsWrapper,
  DescriptionWrapper: DescriptionWrapper,
};

export default Styled;