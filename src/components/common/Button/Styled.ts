import styled, { css } from 'styled-components';

const ButtonPrimary = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.neutral.white};
  outline: 1px solid transparent;
  cursor: pointer;
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
`);

const DraftButton = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.buttons.draft.bg};
  color: ${theme.colors.buttons.draft.text};
  cursor: pointer;
  transition:
    background-color ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out;

  &:active {
    background-color: ${theme.colors.buttons.draft.hoverBg};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.buttons.draft.hoverBg};
    }
  }
`);

const DeleteButton = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.error.main};
  color: ${theme.colors.neutral.white};
  outline: 1px solid transparent;
  cursor: pointer;
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
`);

const AddButton = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.buttons.add.bg};
  color: ${theme.colors.buttons.add.text};
  cursor: pointer;
  transition:
    background-color ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out;

  &:active {
    background-color: ${theme.colors.buttons.add.hoverBg};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.buttons.add.hoverBg};
    }
  }
`);

const DiscardButton = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.buttons.discard.bg};
  color: ${theme.colors.buttons.discard.text};
  cursor: pointer;
  transition:
    background-color ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out;

  &:active {
    background-color: ${theme.colors.buttons.discard.hoverBg};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.buttons.discard.hoverBg};
    }
  }
`);

const Styled = {
  ButtonPrimary: ButtonPrimary,
  DraftButton: DraftButton,
  DeleteButton: DeleteButton,
  AddButton: AddButton,
  DiscardButton: DiscardButton
};

export default Styled;