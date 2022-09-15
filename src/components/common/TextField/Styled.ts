import styled, { css, DefaultTheme } from 'styled-components';

const Wrapper = styled.div`
  width: fit-content;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface InvalidStateProps {
  theme: DefaultTheme;
  $invalid?: boolean | undefined;
};

const ErrorMsg = styled.div<InvalidStateProps>(
  ({ theme, $invalid }) => css`
    color: ${theme.colors.error.main};
    opacity: ${$invalid ? 1 : 0};
    transition: opacity ${theme.transitionDuration} ease-in-out;
  `
);

interface LabelProps extends InvalidStateProps {
  htmlFor: string;
};

const Label = styled.label<LabelProps>(
  ({ theme, $invalid }) => css`
    display: block;
    color: ${$invalid ? theme.colors.error.main
                      : theme.colors.formElements.labelsText};
    transition: color ${theme.transitionDuration} ease-in-out;
  `
);

const Input = styled.input(({ theme }) => css`
  display: block;
  min-width: 198px;
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
`);

const Styled = {
  Wrapper: Wrapper,
  TextWrapper: TextWrapper,
  ErrorMsg: ErrorMsg,
  Label: Label,
  Input: Input,
};

export default Styled;