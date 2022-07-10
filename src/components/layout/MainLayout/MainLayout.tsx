type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <header>
      <h1>MainLayout</h1>
    </header>
    <main>
      {children}
    </main>
  </>
);

export default MainLayout;