import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as SunIcon } from '../../../assets/icon-sun.svg';
//import { ReactComponent as MoonIcon } from '../../../assets/icon-moon.svg';
import UserProfilePicture from '../../../assets/image-avatar.jpg';

const Header: React.FC = () => (
  <header>
    <div className='app-logo'>
      <div className='logo-light-bg' />
      <Logo />
    </div>
    <div className='buttons-wrapper'>
      <button className='theme-toggle-btn'>
        <SunIcon />
      </button>
      <hr />
      <button className='user-avatar'>
        <img src={UserProfilePicture} alt='current user profile picture' />
      </button>
    </div>
  </header>
);

export default Header;