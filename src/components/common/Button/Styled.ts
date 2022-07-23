import styled, { css } from 'styled-components';

const TextWrapper = styled.div`
  display: inline-block;
  margin: 0 8px 0 16px;
`;

const AddIcon = styled.div(({ theme }) => css`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${theme.colors.neutral.white};
  display: inline-grid;

  svg {
    place-self: center;
  }
`);

const Button1 = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 8px;
  border-radius: 24px;
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.neutral.white};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:active {
    background-color: ${theme.colors.accent.light};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.accent.light};
    }
  }
`);

const Button2 = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.neutral.white};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:active {
    background-color: ${theme.colors.accent.light};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.accent.light};
    }
  }
`);

const Button3 = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.buttons.button3.bg};
  color: ${theme.colors.buttons.button3.text};
  cursor: pointer;
  transition:
    background-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:active {
    background-color: ${theme.colors.buttons.button3.hoverBg};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.buttons.button3.hoverBg};
    }
  }
`);

const Button4 = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.buttons.button4.bg};
  color: ${theme.colors.buttons.button4.text};
  cursor: pointer;
  transition:
    background-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:active {
    background-color: ${theme.colors.buttons.button4.hoverBg};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.buttons.button4.hoverBg};
    }
  }
`);

const Button5 = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.error.main};
  color: ${theme.colors.neutral.white};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:active {
    background-color: ${theme.colors.error.light};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.error.light};
    }
  }
`);

const Button6 = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.lightGrey.lighter};
  color: ${theme.colors.grey.light};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:active {
    background-color: ${theme.colors.lightGrey.light};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.lightGrey.light};
    }
  }
`);

const Styled = {
  TextWrapper: TextWrapper,
  AddIcon: AddIcon,
  Button1: Button1,
  Button2: Button2,
  Button3: Button3,
  Button4: Button4,
  Button5: Button5,
  Button6: Button6
};

export default Styled;