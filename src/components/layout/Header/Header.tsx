import Styled from './Styled';

import Logo from '../../../assets/logo.svg';
//import { ReactComponent as SunIcon } from '../../../assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icon-moon.svg';
import UserProfilePicture from '../../../assets/image-avatar.jpg';

const Header: React.FC = () => (
  <Styled.Header>
    <Styled.AppLogo>
      <img src={Logo} alt='company logo' />
    </Styled.AppLogo>
    <Styled.ButtonsWrapper>
      <Styled.ThemeToggler>
        <MoonIcon />
      </Styled.ThemeToggler>
      <Styled.Divider />
      <Styled.UserAvatar>
        <img src={UserProfilePicture} alt='current user profile picture' />
      </Styled.UserAvatar>
    </Styled.ButtonsWrapper>
  </Styled.Header>
);

export default Header;