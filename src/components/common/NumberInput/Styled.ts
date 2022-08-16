import styled, { css } from 'styled-components';

const Input = styled.input(({ theme }) => css`
  display: block;
  padding: 15.5px 20px;
  background-color: ${theme.colors.formElements.background};
  border: 1px solid ${theme.colors.formElements.outline};
  border-radius: 4px;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.s};
  line-height: ${theme.typography.lineHeights[1]};
  letter-spacing: ${theme.typography.letterSpacings[4]};
  color: ${theme.colors.formElements.text};
  transition: 
    background-color ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out,
    border-color ${theme.transitionDuration} ease-in-out,
    outline ${theme.transitionDuration} ease-in-out;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent.main};
    outline-offset: -1px;
  }

  &[aria-invalid='true'] {
    border: 1px solid ${theme.colors.error.main};

    &:focus-visible {
      outline-offset: 0;
    }
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`);

const Styled = {
  Input: Input,
};

export default Styled;