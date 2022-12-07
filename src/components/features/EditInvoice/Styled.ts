import styled, { css } from 'styled-components';

const Section = styled.section`
  margin-top: 12px;
  margin-bottom: 140px;
`;

const Heading = styled.h2(({ theme }) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: ${theme.colors.text.main};
  margin-top: 12px;
  margin-bottom: 0;
  transition: color ${theme.transitionDuration} ease-in-out;

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    margin-top: 28px;
  }

  span {
    color: ${theme.colors.lightGrey.main};
  }
`);

const HeadingWrapper = styled.div`
  overflow: hidden;
`;

const Styled = {
  Section: Section,
  HeadingWrapper: HeadingWrapper,
  Heading: Heading,
};

export default Styled;