import styled from 'styled-components';

import Logo from '../../../assets/logo.svg';
//import { ReactComponent as SunIcon } from '../../../assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icon-moon.svg';
import UserProfilePicture from '../../../assets/image-avatar.jpg';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${props => props.theme.colors.backgrounds.banner};
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 103px;
    height: 100%;
    left: 0;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }
`;

const AppLogo = styled.div`
  width: 72px;
  height: 72px;
  background-color: ${props => props.theme.colors.accent.main};
  border-radius: 0 20px 20px 0;
  display: grid;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.accent.light};
    border-radius: 20px 0 0 0;
    z-index: 1;
  }

  img {
    place-self: center;
    z-index: 2;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 103px;
    height: 103px;

    img {
      width: 40px;
      height: 37.71px;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  margin-right: 24px;

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

const Divider = styled.hr`
  border: none;
  padding: 0;
  margin: 0;
  height: 100%;
  border-left: 1px solid hsla(231, 20%, 36%, 1);

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    border-left: none;
    border-top: 1px solid hsla(231, 20%, 36%, 1);
    height: auto;
    width: 100%;
  }
`;

const ThemeToggler = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  height: fit-content;
  width: fit-content;
  display: grid;
  background-color: transparent;
  cursor: pointer;

  svg {
    place-self: center;
  }
`;

const UserAvatar = styled.button`
  padding: 0;
  border: none;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-right: 0;
  }
`;

const Header: React.FC = () => (
  <StyledHeader>
    <AppLogo>
      <img src={Logo} alt='app logo' />
    </AppLogo>
    <ButtonsWrapper>
      <ThemeToggler>
        <MoonIcon />
      </ThemeToggler>
      <Divider />
      <UserAvatar>
        <img src={UserProfilePicture} alt='current user profile picture' />
      </UserAvatar>
    </ButtonsWrapper>
  </StyledHeader>
);

export default Header;