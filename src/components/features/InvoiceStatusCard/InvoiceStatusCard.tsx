import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import {
  selectInvoiceStatusById,
  changeInvoiceStatus
} from '../../../redux/invoicesSlice';
import type { Status } from '../../../redux/invoicesSlice';

import { assertNotUndefined } from '../../../utils/typeUtils';

import Card from '../../common/Card/Card';
import Typography from '../../common/Typography/Typography';
import StatusChip from '../../common/StatusChip/StatusChip';
import EditInvoiceLink from '../../common/EditInvoiceLink/EditInvoiceLink';
import Button from '../../common/Button/Button';

import Styled from './Styled';

const InvoiceStatusCard: React.FC = () => {
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
    <Card element='div'>
      <Styled.Wrapper>
        <Styled.StatusWrapper>
          <Typography variant='body1' element='span'>
            Status
          </Typography>
          <StatusChip status={status} />
        </Styled.StatusWrapper>
        <Styled.ButtonsWrapper>
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
        </Styled.ButtonsWrapper>
      </Styled.Wrapper>
    </Card>
  );
};

export default InvoiceStatusCard;