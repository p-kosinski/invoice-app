import Styled from './Styled';

import UserProfilePicture from '../../../assets/image-avatar.jpg';

const UserAvatar: React.FC = () => (
  <Styled.UserAvatarButton>
    <img src={UserProfilePicture} alt='current user profile picture' />
  </Styled.UserAvatarButton>
);

export default UserAvatar;