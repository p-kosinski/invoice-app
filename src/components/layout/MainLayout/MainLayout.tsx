import Header from '../Header/Header';
import Container from '../Container/Container';

import Styled from './Styled';

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <Styled.Main>
      <Container>
        {children}
      </Container>
    </Styled.Main>
  </>
);

export default MainLayout;