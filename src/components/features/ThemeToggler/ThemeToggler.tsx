import Styled from './Styled';

//import { ReactComponent as SunIcon } from '../../../assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icon-moon.svg';

const ThemeToggler: React.FC = () => {
  return (
    <Styled.ThemeToggleButton>
      <MoonIcon />
    </Styled.ThemeToggleButton>
  );
};

export default ThemeToggler;