import { useAppDispatch } from '../../../hooks/reduxHooks';

import { setDrawerOpen } from '../../../redux/invoicesViewSlice';

import Container from '../../layout/Container/Container';
import GoBackButton from '../../common/GoBackButton/GoBackButton';
import InvoiceForm from '../InvoiceForm/InvoiceForm';

import InvoiceFormActionButtons from '../InvoiceFormActionButtons/InvoiceFormActionButtons';

import Styled from './Styled';

const NewInvoice: React.FC = () => {
  const dispatch = useAppDispatch();

  const closeDrawer = () => {
    dispatch(setDrawerOpen(false))
  };

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
            New Invoice
          </Styled.Heading>
        </Styled.HeadingWrapper>
        <InvoiceForm />
      </Container>
      <InvoiceFormActionButtons />
    </Styled.Section>
  );
};

export default NewInvoice;