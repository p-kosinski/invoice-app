import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useAppSelector } from './hooks/reduxHooks';
import { selectCurrentTheme } from './redux/themeSlice';
import type { ThemeMode } from './redux/themeSlice';

import Header from './components/layout/Header/Header';
import Invoices from './components/views/Invoices/Invoices';
import InvoiceEdit from './components/views/InvoiceEdit/InvoiceEdit';
import Invoice from './components/views/Invoice/Invoice';

import { lightTheme, darkTheme } from './styles/themes';

const App: React.FC = () => {
  const currentTheme: ThemeMode = useAppSelector(selectCurrentTheme);

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
