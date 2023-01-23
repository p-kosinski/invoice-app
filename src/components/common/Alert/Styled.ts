import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type AlertProps = {
  $severity: 'success' | 'error';
};

const Alert = styled(motion.div)<AlertProps>(({ theme, $severity }) => css`
  padding: 16px 24px;
  border-radius: 8px;
  ${$severity === 'success' && `
    border: 1px solid ${theme.colors.alerts.success};
  `};
  ${$severity === 'error' && `
    border: 1px solid ${theme.colors.alerts.error};
  `};
  background-color: ${theme.colors.backgrounds.card};
  color: ${theme.colors.text.main};
  box-shadow: 0px 24px 24px 0px ${theme.colors.shadow.main};
  z-index: 999;
  transition:
    background-color ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out,
    box-shadow ${theme.transitionDuration} ease-in-out,
    border ${theme.transitionDuration} ease-in-out;

  :not(:last-of-type) {
    margin-bottom: 24px;
  }

  p {
    color: inherit;
    margin-bottom: 0;
  }

  svg {
    transition: color ${theme.transitionDuration} ease-in-out;
    ${$severity === 'success' && `
      color: ${theme.colors.alerts.success};
    `};
    ${$severity === 'error' && `
      color: ${theme.colors.alerts.error};
    `};
    height: 20px;
    width: 20px;
  }
`);

const HeadingWrapper = styled.div(({ theme }) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`);

const CloseButton = styled.button(({ theme }) => css`
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  svg {
    transition: transform ${theme.transitionDuration} ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      svg {
        transform: scale(1.25);
      }
    }
  }
`);

const Styled = {
  Alert: Alert,
  HeadingWrapper: HeadingWrapper,
  CloseButton: CloseButton
};

export default Styled;