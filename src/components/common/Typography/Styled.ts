import styled, { css } from 'styled-components';

const H1 = styled.h1(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.xl};
  letter-spacing: ${theme.typography.letterSpacings[1]};
  line-height: 36px;
`);

const H2 = styled.h2(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.l};
  letter-spacing: ${theme.typography.letterSpacings[3]};
  line-height: 22px;
`);

const H3 = styled.h3(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.m};
  letter-spacing: ${theme.typography.letterSpacings[2]};
  line-height: 24px;
`);

const H4 = styled.h4(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.s};
  letter-spacing: ${theme.typography.letterSpacings[4]};
  line-height: 24px;
`);

const SpanBody1 = styled.span(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.medium};
  font-size: ${theme.typography.fontSizes.s};
  letter-spacing: ${theme.typography.letterSpacings[4]};
  line-height: 15px;
`);

const ParagraphBody1 = styled.p(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.medium};
  font-size: ${theme.typography.fontSizes.s};
  letter-spacing: ${theme.typography.letterSpacings[4]};
  line-height: 15px;
`);

const SpanBody2 = styled.span(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.medium};
  font-size: ${theme.typography.fontSizes.xs};
  letter-spacing: ${theme.typography.letterSpacings[5]};
  line-height: 18px;
`);

const ParagraphBody2 = styled.p(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.medium};
  font-size: ${theme.typography.fontSizes.xs};
  letter-spacing: ${theme.typography.letterSpacings[5]};
  line-height: 18px;
`);

const Styled = {
  H1: H1,
  H2: H2,
  H3: H3,
  H4: H4,
  SpanBody1: SpanBody1,
  ParagraphBody1: ParagraphBody1,
  SpanBody2: SpanBody2,
  ParagraphBody2: ParagraphBody2
};

export default Styled;