import styled, { css, DefaultTheme } from 'styled-components';

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`;

const FiltersButton = styled.button(({ theme }) => css`
  border: none;
  background-color: transparent;
  padding: 12px 24px;
  cursor: pointer;

  svg {
    margin-left: 16px;
    transition: transform ${theme.transitionDuration} ease-in-out;
  }

  &[aria-expanded='true'] {
    svg {
      transform: rotate(180deg);
    }
  }
`);

const ButtonText = styled.span(({ theme }) => css`
  color: ${theme.colors.text.main};
  transition: color ${theme.transitionDuration} ease-in-out;

  &::after {
    content: 'Filter';

    @media only screen and (min-width: ${theme.breakpoints.tablet}) {
      content: 'Filter by status';
    }
  }
`);

type FiltersProps = {
  theme: DefaultTheme;
  $visible: boolean;
};

const Filters = styled.div<FiltersProps>(({ theme, $visible }) => css`
  position: absolute;
  top: 54px;
  left: -32px;
  padding: 18px 24px;
  width: 120px;
  background-color: ${theme.colors.formElements.statusFiltersBg};
  border-radius: 8px;
  box-shadow: 0px 10px 20px ${theme.colors.formElements.shadow};
  visibility: ${$visible ? 'visible' : 'hidden'};
  opacity: ${$visible ? 1 : 0};
  transform: translateY(${$visible ? '0px' : '20px'});
  transition:
    background-color ${theme.transitionDuration} ease-in-out,
    box-shadow ${theme.transitionDuration} ease-in-out,
    opacity ${theme.transitionDuration} ease-in-out,
    transform ${theme.transitionDuration} ease-in-out,
    visibility ${theme.transitionDuration} ease-in-out;

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    left: -20px;
    width: 150px;
  }
`);

const InputWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: flex-start;

  &:not(:last-of-type) {
    margin-bottom: 6px;
  }
`);

const Label = styled.label(({ theme }) => css`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.text.main};
  cursor: pointer;
  transition:
    color ${theme.transitionDuration} ease-in-out,
    border ${theme.transitionDuration} ease-in-out;

  &:hover {
    input[type='checkbox'] {
      border: 1px solid ${theme.colors.accent.main};
    }
  }
`);

const Input = styled.input(({ theme }) => css`
  &[type='checkbox'] {
    appearance: none;
    margin-right: 14px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background-color: ${theme.colors.formElements.dividers};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      border ${theme.transitionDuration} ease-in-out;

    &::before {
      content: url("data:image/svg+xml,%3Csvg width='10' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 4.5l2.124 2.124L8.97 1.28' stroke='%23FFF' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
      height: 20px;
      opacity: 0;
      transform: scale(0);
      transition:
        opacity ${theme.transitionDuration} ease-in-out,
        transform ${theme.transitionDuration} ease-in-out;
    }

    &:checked {
      background-color: ${theme.colors.accent.main};

      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`);

const Styled = {
  Wrapper: Wrapper,
  FiltersButton: FiltersButton,
  ButtonText: ButtonText,
  Filters: Filters,
  InputWrapper: InputWrapper,
  Label: Label,
  Input: Input
};

export default Styled;