import styled, { css } from 'styled-components';

const ThemeToggleButton = styled.button(({ theme }) => css`
  border: none;
  padding: 0;
  height: fit-content;
  width: fit-content;
  display: grid;
  background-color: transparent;
  cursor: pointer;

  svg {
    place-self: center;
    fill: ${theme.colors.buttons.themeToggler.default};
    transition: fill 0.15s ease-in-out;
  }

  &:active {
    svg {
      fill: ${theme.colors.buttons.themeToggler.active};
    }
  }

  @media (hover: hover) {
    &:hover {
      svg {
        fill: ${theme.colors.buttons.themeToggler.active};
      }
    }
  }
`);

const Styled = {
  ThemeToggleButton: ThemeToggleButton,
};

export default Styled;