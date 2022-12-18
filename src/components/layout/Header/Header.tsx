import HeaderLogo from '../../common/HeaderLogo/HeaderLogo';
import ThemeToggler from '../../features/ThemeToggler/ThemeToggler';
import UserAvatar from '../../common/UserAvatar/UserAvatar';

import Styled from './Styled';

const Header: React.FC = () => (
  <Styled.Header>
    <Styled.HomePageLink to='/' aria-label='home page'>
      <HeaderLogo />
    </Styled.HomePageLink>
    <Styled.ButtonsWrapper>
      <ThemeToggler />
      <Styled.Divider />
      <UserAvatar />
    </Styled.ButtonsWrapper>
  </Styled.Header>
);

export default Header;