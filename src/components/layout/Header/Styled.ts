import styled, { css } from 'styled-components';

const Header = styled.header(({ theme }) => css`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${theme.colors.backgrounds.banner};
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 103px;
    height: 100%;
    left: 0;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }
`);

const ButtonsWrapper = styled.div(({ theme }) => css`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 24px;

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
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

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    border-left: none;
    border-top: 1px solid hsla(231, 20%, 36%, 1);
    height: auto;
    width: 100%;
  }
`);

const Styled = {
  Header: Header,
  ButtonsWrapper: ButtonsWrapper,
  Divider: Divider,
};

export default Styled;