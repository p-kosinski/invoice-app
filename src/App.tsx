import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import store from './redux/store';

import Header from './components/layout/Header/Header';
import Invoices from './components/views/Invoices/Invoices';
import InvoiceEdit from './components/views/InvoiceEdit/InvoiceEdit';
import Invoice from './components/views/Invoice/Invoice';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
