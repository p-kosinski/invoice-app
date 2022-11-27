import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import {
  setInvoiceDataChangingSuccess,
  selectInvoiceStatusById,
  changeInvoiceStatus
} from '../../../redux/invoicesSlice';
import {
  setDeletionDialogOpen,
  setDrawerOpen
} from '../../../redux/invoiceViewSlice';
import type { Status } from '../../../redux/invoicesSlice';

import { assertNotUndefined } from '../../../utils/typeUtils';

import Card from '../../common/Card/Card';
import Typography from '../../common/Typography/Typography';
import StatusChip from '../../common/StatusChip/StatusChip';
import Button from '../../common/Button/Button';

import Styled from './Styled';

const InvoiceStatusCard: React.FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id?: string }>();

  assertNotUndefined(id);

  const status: Status = useAppSelector((state) =>
    selectInvoiceStatusById(state, id)
  );

  const openDrawer = () => {
    dispatch(setDrawerOpen(true))
  };

  const resetInvoiceDataChangingSuccess = () => {
    dispatch(setInvoiceDataChangingSuccess(false));
  };

  const changeInvoiceStatusToPaid = () => {
    dispatch(changeInvoiceStatus({ id: id, newStatus: 'paid' }))
  };

  const changeDeletionDialogOpen = (open: boolean) => {
    dispatch(setDeletionDialogOpen(open))
  };

  return (
    <Card element='div'>
      <Styled.Wrapper>
        <Styled.StatusWrapper>
          <Typography variant='body1' element='span'>
            Status
          </Typography>
          <StatusChip status={status} />
        </Styled.StatusWrapper>
        <Styled.ButtonsWrapper>
          <Button
            variant='edit'
            ariaLabel='edit invoice'
            onClick={() => {
              openDrawer();
              resetInvoiceDataChangingSuccess();
            }}
          >
            Edit
          </Button>
          <Button
            variant='delete'
            onClick={() => changeDeletionDialogOpen(true)}
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
        </Styled.ButtonsWrapper>
      </Styled.Wrapper>
    </Card>
  );
};

export default InvoiceStatusCard;