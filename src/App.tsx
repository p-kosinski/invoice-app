import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useAppSelector, useAppDispatch } from './hooks/reduxHooks';
import { selectCurrentTheme, changeCurrentTheme } from './redux/themeSlice';
import type { CurrentTheme } from './redux/themeSlice';

import Header from './components/layout/Header/Header';
import Invoices from './components/views/Invoices/Invoices';
import InvoiceEdit from './components/views/InvoiceEdit/InvoiceEdit';
import Invoice from './components/views/Invoice/Invoice';

import { lightTheme, darkTheme } from './styles/themes';

const App: React.FC = () => {
  const currentTheme: CurrentTheme = useAppSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();

  const setThemeMode = (mode: CurrentTheme) => {
    dispatch(changeCurrentTheme(mode));
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  }, []);

  const themes = {
    dark: lightTheme,
    light: darkTheme
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Normalize />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Invoices />}>
            <Route path='new' element={<InvoiceEdit newInvoice />} />
          </Route>
          <Route path='/:id' element={<Invoice />}>
            <Route path='edit' element={<InvoiceEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
