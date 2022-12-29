import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const NoInvoicesInfo = styled(motion.div)`
  padding-block: clamp(40px, 4vh, 64px);
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div(({ theme }) => css`
  margin-top: clamp(40px, 4vw, 64px);
  color: ${theme.colors.text.main};
  transition: color ${theme.transitionDuration} ease-in-out;

  h2 {
    margin-top: 0;
    margin-bottom: 24px;
    text-align: center;
  }

  p {
    margin: 0;
    text-align: center;
  }
`);

const FiltersText = styled.strong(({ theme }) => css`
  font-weight: ${theme.font.weights.bold};
  
  &::after {
    content: 'Filter';

    @media only screen and (min-width: ${theme.breakpoints.sm}) {
      content: 'Filter by status';
    }
  }
`);

const ButtonText = styled.strong(({ theme }) => css`
  font-weight: ${theme.font.weights.bold};
  
  &::after {
    content: 'New';

    @media only screen and (min-width: ${theme.breakpoints.sm}) {
      content: 'New Invoice';
    }
  }
`);

const Styled = {
  NoInvoicesInfo: NoInvoicesInfo,
  FlexWrapper: FlexWrapper,
  TextWrapper: TextWrapper,
  FiltersText: FiltersText,
  ButtonText: ButtonText
};

export default Styled;