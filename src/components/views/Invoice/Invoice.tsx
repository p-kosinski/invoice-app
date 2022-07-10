import { Link, Outlet } from 'react-router-dom';

const Invoice: React.FC = () => (
  <div>
    <h2>Invoice 123 view</h2>
    <Link to='/123/edit'>Edit Invoice</Link>
    <Outlet />
  </div>
);

export default Invoice;