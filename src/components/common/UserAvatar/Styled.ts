import styled, { css } from 'styled-components';

const UserAvatarButton = styled.button(({ theme }) => css`
  padding: 0;
  border: none;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  outline: 1px solid transparent;
  overflow: hidden;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
  }

  :focus-visible {
    outline: 1px solid ${theme.colors.accent.main};
    outline-offset: 4px;
  }

  @media only screen and (min-width: ${theme.breakpoints.lg}) {
    margin-right: 0;
  }
`);

const Styled = {
  UserAvatarButton: UserAvatarButton,
};

export default Styled;