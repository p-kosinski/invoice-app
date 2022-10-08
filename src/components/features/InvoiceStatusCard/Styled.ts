import styled, { css } from 'styled-components';

const Wrapper = styled.div(({ theme }) => css`
  padding: 24px;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    padding: 24px 32px;
  }
`);

const StatusWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.text.secondary};
  transition: color ${theme.transitionDuration} ease-in-out;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    display: inline-flex;
    gap: 16px;
  }
`);

const ButtonsWrapper = styled.div(({ theme }) => css`
  display: none;
  
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    display: block;

    button {
      &:not(:last-of-type) {
        margin-right: 8px;
      }
    }
  }
`);

const Styled = {
  Wrapper: Wrapper,
  StatusWrapper: StatusWrapper,
  ButtonsWrapper: ButtonsWrapper
};

export default Styled;