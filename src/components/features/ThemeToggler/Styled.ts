import styled, { css } from 'styled-components';

const ThemeToggleButton = styled.button(({ theme }) => css`
  border: none;
  padding: 0;
  height: 28px;
  width: 26px;
  position: relative;
  background-color: transparent;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

const LightThemeIconWrapper = styled.div<{ $active: boolean }>`
  opacity: ${(props) => props.$active ? 1 : 0};
  transition: opacity 0.15s ease-in-out;
`;

const DarkThemeIconWrapper = styled.div<{ $active: boolean }>`
  opacity: ${(props) => props.$active ? 1 : 0};
  transition: opacity 0.15s ease-in-out;
`;

const Styled = {
  ThemeToggleButton: ThemeToggleButton,
  LightThemeIconWrapper: LightThemeIconWrapper,
  DarkThemeIconWrapper: DarkThemeIconWrapper,
};

export default Styled;