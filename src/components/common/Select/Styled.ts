import styled, { css, DefaultTheme } from 'styled-components';

const Wrapper = styled.div(({ theme }) => css`
  width: 100%;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.s};
  line-height: ${theme.typography.lineHeights[0]};
  letter-spacing: ${theme.typography.letterSpacings[4]};
  position: relative;
`);

const Select = styled.button(({ theme }) => css`
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-height: 48px;
  padding: 15.5px 20px;
  font-weight: ${theme.font.weights.bold};
  background-color: ${theme.colors.formElements.background};
  color: ${theme.colors.formElements.text};
  border: 1px solid ${theme.colors.formElements.outline};
  border-radius: 4px;
  outline: 1px solid transparent;
  cursor: pointer;
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
      border: 1px solid ${theme.colors.accent.main};
    }
  }

  svg {
    transition: transform ${theme.transitionDuration} ease-in-out;
  }

  &[aria-expanded='true'] {
    border: 1px solid ${theme.colors.accent.main};

    svg {
      transform: rotate(180deg);
    }
  }
`);

const SelectWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface OptionsListProps {
  theme: DefaultTheme;
  $visible?: boolean | undefined;
};

const OptionsList = styled.ul<OptionsListProps>(
  ({ theme, $visible }) => css`
    list-style-type: none;
    padding-inline: 0;
    background-color: ${theme.colors.formElements.background};
    color: ${theme.colors.formElements.optionsText};
    border-radius: 8px;
    box-shadow: 0px 10px 20px ${theme.colors.shadow.main};
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(63px + 20px);
    visibility: ${$visible ? 'visible' : 'hidden'};
    opacity: ${$visible ? 1 : 0};
    transform: translateY(${$visible ? '0px' : '20px'});
    z-index: 998;
    transition: 
      box-shadow ${theme.transitionDuration} ease-in-out,
      background-color ${theme.transitionDuration} ease-in-out,
      opacity ${theme.transitionDuration} ease-in-out,
      transform ${theme.transitionDuration} ease-in-out,
      visibility ${theme.transitionDuration} ease-in-out;
  `
);

const Option = styled.li(({ theme }) => css`
  text-align: start;
  padding: 15.5px 20px;
  min-height: 17px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition:
    border-bottom ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out,
    outline ${theme.transitionDuration} ease-in-out;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${theme.colors.formElements.dividers};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent.main};
    border-radius: 8px;
    color: ${theme.colors.accent.main};
  }

  &:active {
    color: ${theme.colors.accent.main};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${theme.colors.accent.main};
    }
  }

  &[aria-selected='true'] {
    color: ${theme.colors.accent.main};
  }
`);

const Styled = {
  Wrapper: Wrapper,
  Select: Select,
  SelectWrapper: SelectWrapper,
  OptionsList: OptionsList,
  Option: Option,
};

export default Styled;