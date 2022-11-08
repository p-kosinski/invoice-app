import styled, { css, DefaultTheme } from 'styled-components';

const Section = styled.section(({ theme }) => css`
  margin-top: 12px;
  margin-bottom: 140px;
`);

const Heading = styled.h2(({ theme }) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: ${theme.colors.text.main};
  margin-top: 12px;
  margin-bottom: 0;
  transition: color ${theme.transitionDuration} ease-in-out;
`);

const HeadingWrapper = styled.div`
  overflow: hidden;
`;

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
`);

const DetailsFieldset = styled(Fieldset)(({ theme }) => css`
  display: flex;
  flex-direction: column;
`);

const Legend = styled.legend(({ theme }) => css`
  color: ${theme.colors.accent.main};
  margin-bottom: 12px;
`);

const NameWrapper = styled.div(({ theme }) => css`
  grid-area: name;
`);

const EmailWrapper = styled.div(({ theme }) => css`
  grid-area: email;
`);

const StreetAddressWrapper = styled.div(({ theme }) => css`
  grid-area: streetAddress;
`);

const CityWrapper = styled.div(({ theme }) => css`
  grid-area: city;
`);

const PostCodeWrapper = styled.div(({ theme }) => css`
  grid-area: postCode;
`);

const CountryWrapper = styled.div(({ theme }) => css`
  grid-area: country;
`);

const DateWrapper = styled.div(({ theme }) => css`
  grid-area: date;
`);

const PaymentTermsWrapper = styled.div(({ theme }) => css`
  grid-area: paymentTerms;
`);

const DescriptionWrapper = styled.div(({ theme }) => css`
  grid-area: description;
`);

const ItemListWrapper = styled.div(({ theme }) => css`
  margin-block: 24px;
  padding-block: 8px;

  h5 {
    margin-bottom: 24px;
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
`);

const ItemNameWrapper = styled.div(({ theme }) => css`
  grid-area: itemName;
`);

const ItemQuantityWrapper = styled.div(({ theme }) => css`
  grid-area: itemQuantity;
`);

const ItemPriceWrapper = styled.div(({ theme }) => css`
  grid-area: itemPrice;
`);

const ItemTotalWrapper = styled.div(({ theme }) => css`
  grid-area: itemTotal;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:first-of-type {
    margin-top: 3px;
    color: ${theme.colors.formElements.labelsText};
    transition: color ${theme.transitionDuration} ease-in-out;
  }

  p:last-of-type {
    color: ${theme.colors.lightGrey.main};
  }
`);

const ItemDeleteWrapper = styled.div(({ theme }) => css`
  grid-area: itemDelete;
  display: flex;
  justify-content: end;
  align-items: end;
`);

const DeleteButton = styled.button(({ theme }) => css`
  border: none;
  padding: 15.5px 12px;
  background-color: transparent;

  svg {
    display: block;
  }
`);

const AddItemButtonWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: center;
`);

type ToolbarProps = {
  theme: DefaultTheme;
  $showShadow?: boolean;
};

const Toolbar = styled.div<ToolbarProps>(({ theme, $showShadow }) => css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 22px 0;
  background-color: ${theme.colors.backgrounds.card};
  box-shadow: ${$showShadow ? '0px -10px 10px -5px hsla(231, 38%, 45%, 0.1)'
                            : 'none'};
  transition:
    background-color ${theme.transitionDuration} ease-in-out,
    box-shadow ${theme.transitionDuration} ease-in-out;
`);

const ToolbarWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 12px;

    @media only screen and (min-width: ${theme.breakpoints.xs}) {
      padding: 12px 16px;
    }
  }
`);

const ErrorMessages = styled.div(({ theme }) => css`
  p:not(:last-of-type) {
    margin-bottom: 2px;
  }
`);

const Styled = {
  Section: Section,
  HeadingWrapper: HeadingWrapper,
  Heading: Heading,
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
  ItemListWrapper: ItemListWrapper,
  ItemList: ItemList,
  ItemForm: ItemForm,
  ItemNameWrapper: ItemNameWrapper,
  ItemQuantityWrapper: ItemQuantityWrapper,
  ItemPriceWrapper: ItemPriceWrapper,
  ItemTotalWrapper: ItemTotalWrapper,
  ItemDeleteWrapper: ItemDeleteWrapper,
  DeleteButton: DeleteButton,
  AddItemButtonWrapper: AddItemButtonWrapper,
  Toolbar: Toolbar,
  ToolbarWrapper: ToolbarWrapper,
  ErrorMessages: ErrorMessages,
};

export default Styled;