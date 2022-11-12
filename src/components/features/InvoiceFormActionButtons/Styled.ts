import styled, { css, DefaultTheme } from 'styled-components';

type ToolbarProps = {
  theme: DefaultTheme;
  $showShadow?: boolean;
};

const Toolbar = styled.div<ToolbarProps>(
  ({ theme, $showShadow }) => css`
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
  `
);

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

const Styled = {
  Toolbar: Toolbar,
  ToolbarWrapper: ToolbarWrapper,
  SaveButtonsWrapper: SaveButtonsWrapper,
};

export default Styled;