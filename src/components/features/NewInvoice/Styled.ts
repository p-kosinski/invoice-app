import styled, { css, DefaultTheme } from 'styled-components';

const Section = styled.section`
  margin-top: 12px;
  margin-bottom: 140px;
`;

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

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    margin-top: 28px;
  }
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
  $showLabelOnlyOnMobile?: boolean;
};

const ItemTotalWrapper = styled.div<ItemTotalWrapperProps>(
  ({ theme, $showLabelOnlyOnMobile }) => css`
    grid-area: itemTotal;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p:first-of-type {
      margin-top: 3px;
      color: ${theme.colors.formElements.labelsText};
      transition: color ${theme.transitionDuration} ease-in-out;

      ${$showLabelOnlyOnMobile &&
        `@media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: none;
        }`
      }
    }

    p:last-of-type {
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

const AddItemButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

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

const SaveButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const ErrorMessages = styled.div`
  p:not(:last-of-type) {
    margin-bottom: 2px;
  }
`;

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
  SaveButtonsWrapper: SaveButtonsWrapper,
  ErrorMessages: ErrorMessages,
};

export default Styled;