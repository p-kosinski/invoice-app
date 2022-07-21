import Styled from './Styled';

type Props = {
  children?: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => (
  <Styled.Container>
    {children}
  </Styled.Container>
);

export default Container;