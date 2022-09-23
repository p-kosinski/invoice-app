import styled, { css } from 'styled-components';

const Wrapper = styled.div(({ theme }) => css`
  h1 {
    margin-top: 0;
    margin-bottom: 16px;
    color: ${theme.colors.text.main};
    transition: color ${theme.transitionDuration} ease-in-out;

    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      margin-bottom: 8px;
      font-size: ${theme.typography.fontSizes.l};
      line-height: ${theme.typography.lineHeights[3]};
      letter-spacing: ${theme.typography.letterSpacings[3]};
    }
  }

  p {
    margin: 0;
    color: ${theme.colors.text.secondary};
    transition: color ${theme.transitionDuration} ease-in-out;
  }
`);

const SpanHiddenOnMobile = styled.span(({ theme }) => css`
  display: none;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    display: initial;
  }
`);

const Styled = {
  Wrapper: Wrapper,
  SpanHiddenOnMobile: SpanHiddenOnMobile,
};

export default Styled;