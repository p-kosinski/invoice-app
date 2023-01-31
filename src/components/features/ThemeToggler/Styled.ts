import styled, { css, DefaultTheme } from 'styled-components';

const ThemeToggleButton = styled.button(({ theme }) => css`
  border: none;
  padding: 0;
  height: 28px;
  width: 26px;
  position: relative;
  background-color: transparent;
  border-radius: 14px;
  outline: 1px solid transparent;
  cursor: pointer;
  transition: outline ${theme.transitionDuration} ease-in-out;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${theme.colors.buttons.themeToggler.default};
    transition: fill ${theme.transitionDuration} ease-in-out;
  }

  &:active {
    svg {
      fill: ${theme.colors.buttons.themeToggler.active};
    }
  }

  :focus-visible {
    outline: 1px solid ${theme.colors.accent.main};
    outline-offset: 4px;
  }

  @media (hover: hover) {
    &:hover {
      svg {
        fill: ${theme.colors.buttons.themeToggler.active};
      }
    }
  }
`);

type ThemeIconProps = {
  theme: DefaultTheme;
  $active: boolean;
};

const LightThemeIconWrapper = styled.span<ThemeIconProps>(
  ({ theme, $active }) => css`
    opacity: ${$active ? 1 : 0};
    transition: opacity ${theme.transitionDuration} ease-in-out;
  `
);

const DarkThemeIconWrapper = styled.span<ThemeIconProps>(
  ({ theme, $active }) => css`
    opacity: ${$active ? 1 : 0};
    transition: opacity ${theme.transitionDuration} ease-in-out;
  `
);

const Styled = {
  ThemeToggleButton: ThemeToggleButton,
  LightThemeIconWrapper: LightThemeIconWrapper,
  DarkThemeIconWrapper: DarkThemeIconWrapper,
};

export default Styled;