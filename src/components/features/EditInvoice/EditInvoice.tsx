import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';

import {
  setDrawerOpen,
  selectDrawerOpen
} from '../../../redux/invoiceViewSlice';
import { selectInvoiceDataById } from '../../../redux/invoicesSlice';
import type { Invoice } from '../../../redux/invoicesSlice';
import { setAllValues } from '../../../redux/invoiceFormSlice';
import type { FormValuesState } from '../../../redux/invoiceFormSlice';

import { assertNotUndefined } from '../../../utils/typeUtils';
import { parseInvoiceDataToFormValues } from '../../../utils/formUtils';

import Container from '../../layout/Container/Container';
import GoBackButton from '../../common/GoBackButton/GoBackButton';
import InvoiceForm from '../InvoiceForm/InvoiceForm';

import InvoiceFormActionButtons from '../InvoiceFormActionButtons/InvoiceFormActionButtons';

import Styled from './Styled';

const EditInvoice: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  assertNotUndefined(id);

  const dispatch = useAppDispatch();

  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const invoiceData: Invoice = useAppSelector((state) =>
    selectInvoiceDataById(state, id)
  );

  const closeDrawer = () => {
    dispatch(setDrawerOpen(false))
  };

  const changeFormValues = (values: FormValuesState) => {
    dispatch(setAllValues(values));
  };

  useEffect(() => {
    const invoiceFormValues = parseInvoiceDataToFormValues(invoiceData);

    changeFormValues(invoiceFormValues);
  }, []);

  useEffect(() => {
    const invoiceFormValues = parseInvoiceDataToFormValues(invoiceData);

    drawerOpen && changeFormValues(invoiceFormValues);
  }, [drawerOpen]);

  return (
    <Styled.Section>
      <Container>
        <GoBackButton
          showOnMobileOnly
          noInlinePadding
          onClick={() => closeDrawer()}
        />
        <Styled.HeadingWrapper>
          <Styled.Heading>
            Edit <span>#</span>{id}
          </Styled.Heading>
        </Styled.HeadingWrapper>
        <InvoiceForm />
      </Container>
      <InvoiceFormActionButtons variant='edit' />
    </Styled.Section>
  );
};

export default EditInvoice;