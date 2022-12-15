import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useAppSelector } from './hooks/reduxHooks';
import { selectThemeMode } from './redux/themeSlice';
import type { ThemeMode } from './redux/themeSlice';

import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Invoices from './components/views/Invoices/Invoices';
import Invoice from './components/views/Invoice/Invoice';

import { lightTheme, darkTheme } from './styles/themes';

const GlobalStyle = createGlobalStyle(({ theme }) => css`
  body {
    background-color: ${theme.colors.backgrounds.page};
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.formElements.outline} transparent;
    transition:
      background-color ${theme.transitionDuration} ease-in-out,
      scrollbar-color ${theme.transitionDuration} ease-in-out;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.formElements.outline};
      border-radius: 4px;
      transition: background-color ${theme.transitionDuration} ease-in-out;
    }
  }
`);

const App: React.FC = () => {
  const themeMode: ThemeMode = useAppSelector(selectThemeMode);

  const themes = {
    light: lightTheme,
    dark: darkTheme
  };

  return (
    <ThemeProvider theme={themes[themeMode]}>
      <Normalize />
      <GlobalStyle />
      <BrowserRouter>
        <MainLayout>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Invoices />} />
              <Route path='/:id' element={<Invoice />} />
            </Routes>
          </ScrollToTop>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
