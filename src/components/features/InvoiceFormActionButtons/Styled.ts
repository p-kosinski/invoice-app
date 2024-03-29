import styled, { css, DefaultTheme } from 'styled-components';

const Toolbar = styled.div(({ theme }) => css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 22px 0;
  background-color: ${theme.colors.backgrounds.card};
  box-shadow: 0px -10px 10px -5px ${theme.colors.shadow.lighter};
  transition:
    background-color ${theme.transitionDuration} ease-in-out,
    box-shadow ${theme.transitionDuration} ease-in-out;
`);

type ToolbarWrapperProps = {
  theme: DefaultTheme;
  $variant: 'new' | 'edit';
};

const ToolbarWrapper = styled.div<ToolbarWrapperProps>(
  ({ theme, $variant }) => css`
    display: flex;
    ${$variant === 'new' && `justify-content: space-between`};
    ${$variant === 'edit' && `justify-content: end`};
    align-items: center;

    ${$variant === 'new' &&
      `button {
        padding: 12px;

        @media only screen and (min-width: ${theme.breakpoints.xs}) {
          padding: 12px 16px;
        }
      }`
    }
    ${$variant === 'edit' &&
      `button {
        padding: 12px 24px;
      }`
    }
  `
);

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const Styled = {
  Toolbar: Toolbar,
  ToolbarWrapper: ToolbarWrapper,
  ButtonsWrapper: ButtonsWrapper,
};

export default Styled;