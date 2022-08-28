import styled, { css, DefaultTheme } from 'styled-components';

const Label = styled.label(({ theme }) => css`
  display: block;
  margin-bottom: 14px;
  color: ${theme.colors.formElements.labelsText};
  transition: color ${theme.transitionDuration} ease-in-out;
`);

const Wrapper = styled.div(({ theme }) => css`
  position: relative;
  width: fit-content;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weights.bold};
  font-size: ${theme.typography.fontSizes.s};
  line-height: ${theme.typography.lineHeights[0]};
  letter-spacing: ${theme.typography.letterSpacings[4]};
`);

const Input = styled.button(({ theme, disabled }) => css`
  min-width: 240px;
  min-height: 48px;
  padding: 15.5px 20px;
  font-weight: ${theme.font.weights.bold};
  background-color: ${theme.colors.formElements.background};
  color: ${theme.colors.formElements.text};
  border: 1px solid ${theme.colors.formElements.outline};
  border-radius: 4px;
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

const InputWrapper = styled.div`
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

type PopupCardProps = {
  theme: DefaultTheme;
  $visible: boolean | undefined;
};

const PopupCard = styled.div<PopupCardProps>(
  ({ theme, $visible }) => css`
    min-width: ${240 - 2 * 12 + 'px'};
    position: absolute;
    left: 0;
    bottom: -262px;
    padding: 12px;
    background-color: ${theme.colors.formElements.background};
    border-radius: 8px;
    box-shadow: 0px 10px 20px ${theme.colors.formElements.shadow};
    visibility: ${$visible ? 'visible' : 'hidden'};
    opacity: ${$visible ? 1 : 0};
    transform: translateY(${$visible ? '0px' : '20px'});
    z-index: 998;
    transition: box-shadow ${theme.transitionDuration} ease-in-out,
      background-color ${theme.transitionDuration} ease-in-out,
      opacity ${theme.transitionDuration} ease-in-out,
      transform ${theme.transitionDuration} ease-in-out,
      visibility ${theme.transitionDuration} ease-in-out;
  `
);

const MonthPicker = styled.div(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.formElements.text};
  transition: color ${theme.transitionDuration} ease-in-out;
`);

const MonthPickerButton = styled.button(({ theme }) => css`
  border: none;
  padding: 12px;
  margin: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform ${theme.transitionDuration} ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.5);
    }
  }
`);

const Calendar = styled.div`
  margin: 12px 0;
`;

const CalendarRow = styled.div`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-auto-rows: 1fr 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

type CalendarCellProps = {
  theme: DefaultTheme;
  $selected: boolean | undefined;
  $inShownMonth: boolean;
};

const CalendarCell = styled.button<CalendarCellProps>(
  ({ theme, $selected, $inShownMonth }) => css`
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    color: ${$selected ? theme.colors.accent.main : theme.colors.formElements.text};
    transition:
      color ${theme.transitionDuration} ease-in-out;

    &:active {
      ${$inShownMonth && `
        color: ${theme.colors.accent.main};
      `}
    }

    @media (hover: hover) {
      &:hover {
        ${$inShownMonth && `
          color: ${theme.colors.accent.main};
        `}

        span {
          ${$inShownMonth && `
            transform: scale(1.1);
          `}
        }
      }
    }

    span {
      opacity: ${$inShownMonth ? 1: 0.08};
      cursor: ${$inShownMonth ? 'pointer' : 'default'};
      transition: transform ${theme.transitionDuration} ease-in-out;
    }
  `
);

const Styled = {
  Label: Label,
  Wrapper: Wrapper,
  Input: Input,
  InputWrapper: InputWrapper,
  DateWrapper: DateWrapper,
  PopupCard: PopupCard,
  MonthPicker: MonthPicker,
  MonthPickerButton: MonthPickerButton,
  Calendar: Calendar,
  CalendarRow: CalendarRow,
  CalendarCell: CalendarCell,
};

export default Styled;