import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const HeadingWrapper = styled(motion.div)`
  margin-block: clamp(32px, 5vw, 70px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 997;
`;

const ButtonsWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 6px;

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 12px;
  }
`);

const InvoicesWrapper = styled.div`
  article {
    margin-bottom: 16px;
  }
`;

const Styled = {
  HeadingWrapper: HeadingWrapper,
  ButtonsWrapper: ButtonsWrapper,
  InvoicesWrapper: InvoicesWrapper
};

export default Styled;