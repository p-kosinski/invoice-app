import styled, { css, DefaultTheme } from 'styled-components';

type DaysGridCellProps = {
  theme: DefaultTheme;
  $selected: boolean | undefined;
  $inShownMonth: boolean;
};

const DaysGridCell = styled.button<DaysGridCellProps>(
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
  DaysGridCell: DaysGridCell
};

export default Styled;