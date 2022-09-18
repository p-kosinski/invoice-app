import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  fetchInvoicesData,
  selectInvoicesData,
  selectInvoicesLoadingState
} from '../../../redux/invoicesSlice';
import type { InvoicesData, LoadingState } from '../../../redux/invoicesSlice';

import Container from '../../layout/Container/Container';

const Invoices: React.FC = () => {
  const dispatch = useAppDispatch();

  const invoices: InvoicesData = useAppSelector(selectInvoicesData);
  const invoicesLoading: LoadingState = useAppSelector(selectInvoicesLoadingState);

  useEffect(() => {
    !invoices.length && dispatch(fetchInvoicesData());
  }, []);

  return (
    <Container>
      <h2>Invoices view</h2>
      <Link to='/123'>Invoice 123</Link>
      <Link to='/new'>New Invoice</Link>
      <Outlet />
    </Container>
  );
};

export default Invoices;