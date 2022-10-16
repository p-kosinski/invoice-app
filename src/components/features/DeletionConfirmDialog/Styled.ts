import styled, { css } from 'styled-components';

const Dialog = styled.dialog(({ theme }) => css`
  display: block;
  padding: 0;
  border: none;
  position: fixed;
  margin-top: -72px;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1000;
  transition:
    opacity ${theme.transitionDuration} ease-in-out,
    visibility ${theme.transitionDuration} ease-in-out,
    transform ${theme.transitionDuration} ease-in-out;

  &:not([open]) {
    visibility: hidden;
    opacity: 0;
  }

  &[open] {
    visibility: visible;
    opacity: 1;
  }

  @media only screen and (min-width: ${theme.breakpoints.xl}) {
    margin-top: 0;
  }
`);

const Wrapper = styled.div(({ theme }) => css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.6;
    z-index: 1000;
  }

  article {
    width: min(87.5%, 480px);
    z-index: 1001;
  }
`);

const CardWrapper = styled.div(({ theme }) => css`
  padding: 32px;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    padding: 48px;
  }

  h2 {
    color: ${theme.colors.text.main};
    line-height: 32px;
    letter-spacing: -0.42px;
    margin: 0;
    transition: color ${theme.transitionDuration} ease-in-out;

    @media only screen and (min-width: ${theme.breakpoints.sm}) {
      font-size: 24px;
      letter-spacing: -0.5px;
    }
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 22px;
    margin-top: 8px;
    margin-bottom: 24px;
    transition: color ${theme.transitionDuration} ease-in-out;

    @media only screen and (min-width: ${theme.breakpoints.sm}) {
      margin-top: 14px;
      margin-bottom: 16px;
    }
  }
`);

const ButtonsWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: end;
  gap: 8px;
`);

const Styled = {
  Dialog: Dialog,
  Wrapper: Wrapper,
  CardWrapper: CardWrapper,
  ButtonsWrapper: ButtonsWrapper
};

export default Styled;