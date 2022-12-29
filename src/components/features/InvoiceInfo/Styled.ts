import styled, { css } from 'styled-components';

const Wrapper = styled.div(({ theme }) => css`
  padding: 24px;
  margin-bottom: calc(96px + 24px);

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    padding: 32px;
  }

  @media only screen and (min-width: ${theme.breakpoints.lg}) {
    padding: 48px;
  }
`);

const Styled = {
  Wrapper: Wrapper,
};

export default Styled;