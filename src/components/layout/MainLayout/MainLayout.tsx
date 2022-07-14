import Header from '../Header/Header';

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

export default MainLayout;