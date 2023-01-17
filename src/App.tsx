import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useAppSelector } from './hooks/reduxHooks';
import { selectThemeMode } from './redux/themeSlice';
import type { ThemeMode } from './redux/themeSlice';
import {
  selectDrawerOpen as selectInvoicesDrawerOpen
} from './redux/invoicesViewSlice';
import {
  selectDrawerOpen as selectInvoiceDrawerOpen
} from './redux/invoiceViewSlice';

import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';
import MainLayout from './components/layout/MainLayout/MainLayout';
import AlertPopups from './components/features/AlertPopups/AlertPopups';
import Invoices from './components/views/Invoices/Invoices';
import Invoice from './components/views/Invoice/Invoice';

import { lightTheme, darkTheme } from './styles/themes';

type GlobalStyleProps = {
  $noScroll: boolean;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>(
  ({ theme, $noScroll }) => css`
    body {
      background-color: ${theme.colors.backgrounds.page};
      ${$noScroll && 'overflow: hidden;'};
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
  `
);

const App: React.FC = () => {
  const themeMode: ThemeMode = useAppSelector(selectThemeMode);
  
  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const themes = {
    light: lightTheme,
    dark: darkTheme
  };

  return (
    <ThemeProvider theme={themes[themeMode]}>
      <Normalize />
      <GlobalStyle $noScroll={invoicesDrawerOpen || invoiceDrawerOpen} />
      <BrowserRouter>
        <MainLayout>
          <AlertPopups />
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
