import Styled from './Styled';

import Logo from '../../../assets/logo.svg';

const HeaderLogo: React.FC = () => (
  <Styled.HeaderLogo>
    <img src={Logo} alt='' />
  </Styled.HeaderLogo>
);

export default HeaderLogo;