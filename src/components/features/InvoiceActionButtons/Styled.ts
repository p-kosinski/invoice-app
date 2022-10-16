import styled, { css } from 'styled-components';

const Toolbar = styled.div(({ theme }) => css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 24px 0;
  background-color: ${theme.colors.backgrounds.card};
  box-shadow: 0px -10px 10px -5px hsla(231, 38%, 45%, 0.1);
  transition: background-color ${theme.transitionDuration} ease-in-out;

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Styled = {
  Toolbar: Toolbar,
  Wrapper: Wrapper
};

export default Styled;