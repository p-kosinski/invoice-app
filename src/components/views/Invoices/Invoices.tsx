import { Link, Outlet } from 'react-router-dom';

const Invoices: React.FC = () => (
  <div>
    <h2>Invoices view</h2>
    <Link to='/123'>Invoice 123</Link>
    <Link to='/new'>New Invoice</Link>
    <Outlet />
  </div>
);

export default Invoices;