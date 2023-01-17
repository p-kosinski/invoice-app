import styled, { css } from 'styled-components';

const Alerts = styled.div(({ theme }) => css`
  margin-top: 24px;
  position: fixed;
  z-index: 1005;
  width: 100%;

  @media only screen and (min-width: ${theme.breakpoints.xl}) {
    margin-top: calc(36px - 72px);
  }
`);

const AlertsWrapper = styled.div(({ theme }) => css`
  width: 87.5%;
  margin-inline: auto;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    width: 300px;
    margin-inline: auto 24px;
  }
`);

const Styled = {
  Alerts: Alerts,
  AlertsWrapper: AlertsWrapper
};

export default Styled;