import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const GoBackLinkWrapper = styled(motion.div)(({ theme }) => css`
  margin-block: 12px;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    margin-block: 18px;
  }

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    margin-block: 24px;
  }

  @media only screen and (min-width: ${theme.breakpoints.lg}) {
    margin-top: 48px;
    margin-bottom: 24px;
  }
`);

const InvoiceInfoWrapper = styled.div(({ theme }) => css`
  margin-top: 24px;
  margin-bottom: calc(24px + 96px);

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    margin-block: 24px;
  }
`);

const Styled = {
  GoBackLinkWrapper: GoBackLinkWrapper,
  InvoiceInfoWrapper: InvoiceInfoWrapper,
};

export default Styled;