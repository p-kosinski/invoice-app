import { Link } from 'react-router-dom';

import HeaderLogo from '../../common/HeaderLogo/HeaderLogo';
import ThemeToggler from '../../features/ThemeToggler/ThemeToggler';
import UserAvatar from '../../common/UserAvatar/UserAvatar';

import Styled from './Styled';

const Header: React.FC = () => (
  <Styled.Header>
    <Link to='/'>
      <HeaderLogo />
    </Link>
    <Styled.ButtonsWrapper>
      <ThemeToggler />
      <Styled.Divider />
      <UserAvatar />
    </Styled.ButtonsWrapper>
  </Styled.Header>
);

export default Header;