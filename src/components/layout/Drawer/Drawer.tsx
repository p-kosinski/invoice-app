import Styled from './Styled';

type Props = {
  open: boolean;
  children?: React.ReactNode;
};

const Drawer: React.FC<Props> = ({ open, children }) => (
  <>
    <Styled.Backdrop $open={open} />
    <Styled.Drawer aria-hidden={!open} $open={open}>
      <Styled.Wrapper>
        {children}
      </Styled.Wrapper>
    </Styled.Drawer>
  </>
);

export default Drawer;