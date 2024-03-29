import styled, { css } from 'styled-components';

const H1 = styled.h1(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.xl};
  letter-spacing: ${theme.typography.letterSpacings[1]};
  line-height: 36px;
`);

const SpanH1 = styled.span(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.xl};
  letter-spacing: ${theme.typography.letterSpacings[1]};
  line-height: 36px;
`);

const ParagraphH1 = styled.p(({theme}) => css`
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

const SpanH2 = styled.span(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.l};
  letter-spacing: ${theme.typography.letterSpacings[3]};
  line-height: 22px;
`);

const ParagraphH2 = styled.p(({theme}) => css`
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

const SpanH3 = styled.span(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.m};
  letter-spacing: ${theme.typography.letterSpacings[2]};
  line-height: 24px;
`);

const ParagraphH3 = styled.p(({theme}) => css`
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

const SpanH4 = styled.span(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.s};
  letter-spacing: ${theme.typography.letterSpacings[4]};
  line-height: 24px;
`);

const ParagraphH4 = styled.p(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.s};
  letter-spacing: ${theme.typography.letterSpacings[4]};
  line-height: 24px;
`);

const H5 = styled.h5(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.375px;
  color: hsla(225, 14%, 53%, 1);
`);

const SpanH5 = styled.span(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.375px;
  color: hsla(225, 14%, 53%, 1);
`);

const ParagraphH5 = styled.p(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.375px;
  color: hsla(225, 14%, 53%, 1);
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

const ErrorText = styled.p(({theme}) => css`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.semiBold};
  font-size: ${theme.typography.fontSizes.xs};
  letter-spacing: -0.21px;
  line-height: ${theme.typography.lineHeights[1]};
  color: ${theme.colors.error.main};
  margin: 0;
`);

const Styled = {
  H1: H1,
  SpanH1: SpanH1,
  ParagraphH1: ParagraphH1,
  H2: H2,
  SpanH2: SpanH2,
  ParagraphH2: ParagraphH2,
  H3: H3,
  SpanH3: SpanH3,
  ParagraphH3: ParagraphH3,
  H4: H4,
  SpanH4: SpanH4,
  ParagraphH4: ParagraphH4,
  H5: H5,
  SpanH5: SpanH5,
  ParagraphH5: ParagraphH5,
  SpanBody1: SpanBody1,
  ParagraphBody1: ParagraphBody1,
  SpanBody2: SpanBody2,
  ParagraphBody2: ParagraphBody2,
  ErrorText: ErrorText,
};

export default Styled;