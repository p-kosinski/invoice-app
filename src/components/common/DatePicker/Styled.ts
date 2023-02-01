import styled, { css } from 'styled-components';

const Wrapper = styled.div(({ theme }) => css`
  position: relative;
  width: 100%;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.s};
  line-height: ${theme.typography.lineHeights[0]};
  letter-spacing: ${theme.typography.letterSpacings[4]};
`);

const Input = styled.button(({ theme, disabled }) => css`
  box-sizing: border-box;
  width: 100%;
  min-height: 48px;
  padding: 15.5px 20px;
  font-weight: ${theme.font.weights.bold};
  background-color: ${theme.colors.formElements.background};
  color: ${theme.colors.formElements.text};
  border: 1px solid ${theme.colors.formElements.outline};
  border-radius: 4px;
  outline: 1px solid transparent;
  cursor: ${disabled ? 'default' : 'pointer'};
  transition: 
    background-color ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out,
    border ${theme.transitionDuration} ease-in-out,
    outline ${theme.transitionDuration} ease-in-out;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:focus, :focus-visible {
    outline: 1px solid ${theme.colors.accent.main};
    outline-offset: -1px;
  }

  @media (hover: hover) {
    &:hover {
      border: ${disabled ? `1px solid ${theme.colors.formElements.outline}` : `1px solid ${theme.colors.accent.main}`};
    }
  }
`);

const InputWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type DateWrapperProps = {
  $disabled: boolean | undefined;
};

const DateWrapper = styled.div<DateWrapperProps>(({ $disabled }) => css`
  opacity: ${$disabled ? 0.5 : 1};
`);

const Styled = {
  Wrapper: Wrapper,
  Input: Input,
  InputWrapper: InputWrapper,
  DateWrapper: DateWrapper
};

export default Styled;