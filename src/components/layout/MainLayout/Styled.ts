import styled, { css } from 'styled-components';

const Main = styled.main(({ theme }) => css`
  padding-top: 72px;

  @media only screen and (min-width: ${theme.breakpoints.xl}) {
    padding-top: 0;
  }
`);

const Styled = {
  Main: Main,
};

export default Styled;