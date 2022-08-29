import styled, { css, DefaultTheme } from 'styled-components';

type CalendarProps = {
  theme: DefaultTheme;
  $visible: boolean | undefined;
};

const Calendar = styled.div<CalendarProps>(
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

const Styled = {
  Calendar: Calendar
};

export default Styled;