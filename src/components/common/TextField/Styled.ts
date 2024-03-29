import styled, { css, DefaultTheme } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

type TextWrapperProps = {
  theme: DefaultTheme;
  $showLabelOnlyOnMobile?: boolean;
};

const TextWrapper = styled.div<TextWrapperProps>(
  ({ theme, $showLabelOnlyOnMobile }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${$showLabelOnlyOnMobile &&
      `@media only screen and (min-width: ${theme.breakpoints.sm}) {
        visibility: hidden;
        height: 0px;
      }`
    }
  `
);

interface InvalidStateProps {
  theme: DefaultTheme;
  $invalid?: boolean | undefined;
};

const ErrorMsg = styled.div<InvalidStateProps>(
  ({ theme, $invalid }) => css`
    color: ${theme.colors.error.main};
    opacity: ${$invalid ? 1 : 0};
    transition: opacity ${theme.transitionDuration} ease-in-out;

    p {
      margin-top: 0;
    }
  `
);

const Input = styled.input(({ theme }) => css`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 15.5px 20px;
  background-color: ${theme.colors.formElements.background};
  border: 1px solid ${theme.colors.formElements.outline};
  border-radius: 4px;
  outline: 1px solid transparent;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.s};
  line-height: ${theme.typography.lineHeights[1]};
  letter-spacing: ${theme.typography.letterSpacings[4]};
  color: ${theme.colors.formElements.text};
  text-overflow: ellipsis;
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

  ::placeholder {
    color: ${theme.colors.text.main};
    opacity: 0.4;
    transition: color ${theme.transitionDuration} ease-in-out;
  }

  &[aria-invalid='true'] {
    border: 1px solid ${theme.colors.error.main};

    &:focus-visible {
      outline-offset: 0;
    }
  }
`);

const Styled = {
  Wrapper: Wrapper,
  TextWrapper: TextWrapper,
  ErrorMsg: ErrorMsg,
  Input: Input,
};

export default Styled;