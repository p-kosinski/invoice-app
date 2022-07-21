import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useAppSelector } from './hooks/reduxHooks';
import { selectThemeMode } from './redux/themeSlice';
import type { ThemeMode } from './redux/themeSlice';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Invoices from './components/views/Invoices/Invoices';
import InvoiceEdit from './components/views/InvoiceEdit/InvoiceEdit';
import Invoice from './components/views/Invoice/Invoice';

import { lightTheme, darkTheme } from './styles/themes';

const App: React.FC = () => {
  const themeMode: ThemeMode = useAppSelector(selectThemeMode);

  const themes = {
    light: lightTheme,
    dark: darkTheme
  };

  return (
    <ThemeProvider theme={themes[themeMode]}>
      <Normalize />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Invoices />}>
              <Route path='new' element={<InvoiceEdit newInvoice />} />
            </Route>
            <Route path='/:id' element={<Invoice />}>
              <Route path='edit' element={<InvoiceEdit />} />
            </Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
