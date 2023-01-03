import styled, { css, DefaultTheme } from 'styled-components';

interface ButtonProps {
  theme: DefaultTheme;
  $showOnMobile?: boolean;
  $hideOnMobile?: boolean;
};

interface ButtonPropsExtended extends ButtonProps {
  $paddingInline?: string;
};

const buttonBaseStyling = `
  border: none;
  margin: 0;
  outline: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
`;

const ButtonPrimary = styled.button<ButtonProps>(
  ({ theme, $showOnMobile, $hideOnMobile }) => css`
    ${buttonBaseStyling};
    padding: 12px 16px;
    border-radius: 24px;
    background-color: ${theme.colors.accent.main};
    color: ${theme.colors.neutral.white};
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      outline ${theme.transitionDuration} ease-in-out;

    &:active {
      background-color: ${theme.colors.accent.light};
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.accent.main};
      outline-offset: 2px;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${theme.colors.accent.light};
      }
    }

    ${$showOnMobile &&
      `@media only screen and (min-width: ${theme.breakpoints.sm}) {
        display: none;
      }`
    }

    ${$hideOnMobile &&
      `display: none;

        @media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: block;
        }
      `
    }
  `
);

const DraftButton = styled.button<ButtonProps>(
  ({ theme, $showOnMobile, $hideOnMobile }) => css`
    ${buttonBaseStyling};
    padding: 12px 16px;
    border-radius: 24px;
    background-color: ${theme.colors.buttons.draft.bg};
    color: ${theme.colors.buttons.draft.text};
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      color ${theme.transitionDuration} ease-in-out,
      outline ${theme.transitionDuration} ease-in-out;

    &:active {
      background-color: ${theme.colors.buttons.draft.hoverBg};
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.accent.main};
      outline-offset: 2px;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${theme.colors.buttons.draft.hoverBg};
      }
    }

    ${$showOnMobile &&
      `@media only screen and (min-width: ${theme.breakpoints.sm}) {
        display: none;
      }`
    }

    ${$hideOnMobile &&
      `display: none;

        @media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: block;
        }
      `
    }
  `
);

const DeleteButton = styled.button<ButtonProps>(
  ({ theme, $showOnMobile, $hideOnMobile }) => css`
    ${buttonBaseStyling};
    padding: 12px 24px;
    border-radius: 24px;
    background-color: ${theme.colors.error.main};
    color: ${theme.colors.neutral.white};
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      outline ${theme.transitionDuration} ease-in-out;

    &:active {
      background-color: ${theme.colors.error.light};
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.accent.main};
      outline-offset: 2px;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${theme.colors.error.light};
      }
    }

    ${$showOnMobile &&
      `@media only screen and (min-width: ${theme.breakpoints.sm}) {
        display: none;
      }`
    }

    ${$hideOnMobile &&
      `display: none;

        @media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: block;
        }
      `
    }
  `
);

const AddButton = styled.button<ButtonProps>(
  ({ theme, $showOnMobile, $hideOnMobile }) => css`
    ${buttonBaseStyling};
    width: 100%;
    padding: 12px 24px;
    border-radius: 24px;
    background-color: ${theme.colors.buttons.add.bg};
    color: ${theme.colors.buttons.add.text};
    transition:
      outline ${theme.transitionDuration} ease-in-out,
      background-color ${theme.transitionDuration} ease-in-out,
      color ${theme.transitionDuration} ease-in-out;

    &:active {
      background-color: ${theme.colors.buttons.add.hoverBg};
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.accent.main};
      outline-offset: 2px;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${theme.colors.buttons.add.hoverBg};
      }
    }

    ${$showOnMobile &&
      `@media only screen and (min-width: ${theme.breakpoints.sm}) {
        display: none;
      }`
    }

    ${$hideOnMobile &&
      `display: none;

        @media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: block;
        }
      `
    }
  `
);

const DiscardButton = styled.button<ButtonPropsExtended>(
  ({ theme, $showOnMobile, $hideOnMobile, $paddingInline }) => css`
    ${buttonBaseStyling};
    padding: 12px ${$paddingInline ? $paddingInline : '16px'};
    border-radius: 24px;
    background-color: ${theme.colors.buttons.discard.bg};
    color: ${theme.colors.buttons.discard.text};
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      color ${theme.transitionDuration} ease-in-out,
      outline ${theme.transitionDuration} ease-in-out;

    &:active {
      background-color: ${theme.colors.buttons.discard.hoverBg};
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.accent.main};
      outline-offset: 2px;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${theme.colors.buttons.discard.hoverBg};
      }
    }

    ${$showOnMobile &&
      `@media only screen and (min-width: ${theme.breakpoints.sm}) {
        display: none;
      }`
    }

    ${$hideOnMobile &&
      `display: none;

        @media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: block;
        }
      `
    }
  `
);

const EditButton = styled.button<ButtonProps>(
  ({ theme, $showOnMobile, $hideOnMobile }) => css`
    ${buttonBaseStyling};
    padding: 12px 24px;
    border-radius: 24px;
    background-color: ${theme.colors.buttons.edit.bg};
    color: ${theme.colors.buttons.edit.text};
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      color ${theme.transitionDuration} ease-in-out,
      outline ${theme.transitionDuration} ease-in-out;

    &:active {
      background-color: ${theme.colors.buttons.edit.hoverBg};
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.accent.main};
      outline-offset: 2px;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${theme.colors.buttons.edit.hoverBg};
      }
    }

    ${$showOnMobile &&
      `@media only screen and (min-width: ${theme.breakpoints.sm}) {
        display: none;
      }`
    }

    ${$hideOnMobile &&
      `display: none;

        @media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: block;
        }
      `
    }
  `
);

const NewInvoiceButton = styled.button<ButtonProps>(
  ({ theme, $showOnMobile, $hideOnMobile }) => css`
    ${buttonBaseStyling};
    display: inline-flex;
    align-items: center;
    padding: 8px 8px;
    border-radius: 24px;
    background-color: ${theme.colors.accent.main};
    color: ${theme.colors.neutral.white};
    outline-offset: 4px;
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      outline ${theme.transitionDuration} ease-in-out;

    &:active {
      background-color: ${theme.colors.accent.light};
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.accent.main};
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${theme.colors.accent.light};
      }
    }

    ${$showOnMobile &&
      `@media only screen and (min-width: ${theme.breakpoints.sm}) {
        display: none;
      }`
    }

    ${$hideOnMobile &&
      `display: none;

        @media only screen and (min-width: ${theme.breakpoints.sm}) {
          display: block;
        }
      `
    }
  `
);

const AddIcon = styled.div(({ theme }) => css`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${theme.colors.neutral.white};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 10px;
    width: 10px;
  }
`);

const TextWrapper = styled.div`
  display: inline-block;
  margin: 0 8px 0 16px;
`;

const TextContent = styled.span(({ theme }) => css`
  &::after {
    content: 'New';

    @media only screen and (min-width: ${theme.breakpoints.sm}) {
      content: 'New Invoice';
    }
  }
`);

const Styled = {
  ButtonPrimary: ButtonPrimary,
  DraftButton: DraftButton,
  DeleteButton: DeleteButton,
  AddButton: AddButton,
  DiscardButton: DiscardButton,
  EditButton: EditButton,
  NewInvoiceButton: NewInvoiceButton,
  AddIcon: AddIcon,
  TextWrapper: TextWrapper,
  TextContent: TextContent
};

export default Styled;