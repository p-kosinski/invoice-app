import styled, { css, DefaultTheme } from 'styled-components';

type Props = {
  theme: DefaultTheme;
  $open: boolean;
};

const Backdrop = styled.div<Props>(
  ({ theme, $open }) => css`
    display: none;

    @media only screen and (min-width: ${theme.breakpoints.md}) {
      display: block;
      position: fixed;
      height: 100%;
      width: 100%;
      background-color: hsla(0, 0%, 0%, 1);
      z-index: 1;
      visibility: ${$open ? 'visible' : 'hidden'};
      opacity: ${$open ? 0.5 : 0};
      transition: opacity ${theme.transitionDuration} ease-in-out;
    }

    @media only screen and (min-width: ${theme.breakpoints.xl}) {
      top: 0;
    }
  `
);

const Drawer = styled.aside<Props>(
  ({ theme, $open }) => css`
    position: absolute;
    top: 72px;
    left: 0;
    height: calc(100vh - 72px);
    width: 100%;
    background-color: ${theme.colors.backgrounds.form};
    overflow: hidden;
    z-index: 2;
    transform: ${$open ? 'translateX(0)' : 'translateX(-100%)'};
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      transform ${theme.transitionDuration} ease-in-out,
      visibility ${theme.transitionDuration} ease-in-out;

    @media only screen and (min-width: ${theme.breakpoints.md}) {
      width: 80%;
      border-radius: 0 20px 20px 0;
    }

    @media only screen and (min-width: ${theme.breakpoints.lg}) {
      width: 60%;
    }

    @media only screen and (min-width: ${theme.breakpoints.xl}) {
      position: absolute;
      top: 0;
      left: calc(103px - 20px);
      height: 100vh;
      width: calc((50% - 103px) + 20px);
      padding-left: 20px;
    }
  `
);

const Wrapper = styled.div(({ theme }) => css`
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.formElements.outline} transparent;
  transition: scrollbar-color ${theme.transitionDuration} ease-in-out;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.formElements.outline};
    border-radius: 4px;
    transition: background-color ${theme.transitionDuration} ease-in-out;
  }
`);

const Styled = {
  Backdrop: Backdrop,
  Drawer: Drawer,
  Wrapper: Wrapper
};

export default Styled;