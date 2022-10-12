import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import {
  selectInvoiceStatusById,
  changeInvoiceStatus
} from '../../../redux/invoicesSlice';
import type { Status } from '../../../redux/invoicesSlice';

import { assertNotUndefined } from '../../../utils/typeUtils';

import Container from '../../layout/Container/Container';
import EditInvoiceLink from '../../common/EditInvoiceLink/EditInvoiceLink';
import Button from '../../common/Button/Button';

import Styled from './Styled';

const InvoiceActionButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id?: string }>();

  assertNotUndefined(id);

  const status: Status = useAppSelector((state) =>
    selectInvoiceStatusById(state, id)
  );

  const changeInvoiceStatusToPaid = () => {
    dispatch(changeInvoiceStatus({ id: id, newStatus: 'paid' }))
  };

  return (
    <Styled.Toolbar>
      <Container>
        <Styled.Wrapper>
          <EditInvoiceLink />
          <Button
            variant='delete'
            onClick={() => console.log('"Delete" button was clicked')}
          >
            Delete
          </Button>
          {status === 'pending' &&
            <Button
              variant='primary'
              onClick={() => changeInvoiceStatusToPaid()}
            >
              Mark as paid
            </Button>
          }
        </Styled.Wrapper>
      </Container>
    </Styled.Toolbar>
  );
};

export default InvoiceActionButtons;