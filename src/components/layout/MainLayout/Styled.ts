import styled, { css } from 'styled-components';

const Main = styled.main(({ theme }) => css`
  padding-top: 72px;
  background-color: ${theme.colors.backgrounds.page};
  transition: background-color ${theme.transitionDuration} ease-in-out;

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 0;
  }
`);

const Styled = {
  Main: Main,
};

export default Styled;