import Header from '../Header/Header';

import Styled from './Styled';

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <Styled.Main>
      {children}
    </Styled.Main>
  </>
);

export default MainLayout;