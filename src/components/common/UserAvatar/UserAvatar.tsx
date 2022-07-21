import Styled from './Styled';

import UserProfilePicture from '../../../assets/image-avatar.jpg';

const UserAvatar: React.FC = () => (
  <Styled.UserAvatarButton
    aria-label='open user menu'
  >
    <img src={UserProfilePicture} alt='' />
  </Styled.UserAvatarButton>
);

export default UserAvatar;