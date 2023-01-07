import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header(({ theme }) => css`
  height: 72px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${theme.colors.backgrounds.banner};
  display: flex;
  justify-content: space-between;
  transition: background-color ${theme.transitionDuration} ease-in-out;
  z-index: 1000;

  @media only screen and (min-width: ${theme.breakpoints.xl}) {
    width: 103px;
    height: 100%;
    left: 0;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }
`);

const HomePageLink = styled(Link)(({ theme }) => css`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  outline: 1px solid transparent;
  transition: outline ${theme.transitionDuration} ease-in-out;

  :focus-visible {
    outline: 1px solid ${theme.colors.accent.main};
    outline-offset: 4px;
  }
`);

const ButtonsWrapper = styled.div(({ theme }) => css`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 24px;

  @media only screen and (min-width: ${theme.breakpoints.xl}) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 24px;
  }
`);

const Divider = styled.hr(({ theme }) => css`
  border: none;
  padding: 0;
  margin: 0;
  height: 100%;
  border-left: 1px solid hsla(231, 20%, 36%, 1);

  @media only screen and (min-width: ${theme.breakpoints.xl}) {
    border-left: none;
    border-top: 1px solid hsla(231, 20%, 36%, 1);
    height: auto;
    width: 100%;
  }
`);

const Styled = {
  Header: Header,
  HomePageLink: HomePageLink,
  ButtonsWrapper: ButtonsWrapper,
  Divider: Divider,
};

export default Styled;