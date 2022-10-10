import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectInvoiceStatusById } from '../../../redux/invoicesSlice';
import type { Status } from '../../../redux/invoicesSlice';

import { assertNotUndefined } from '../../../utils/typeUtils';

import Card from '../../common/Card/Card';
import Typography from '../../common/Typography/Typography';
import StatusChip from '../../common/StatusChip/StatusChip';
import Button from '../../common/Button/Button';

import Styled from './Styled';

const InvoiceStatusCard: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  assertNotUndefined(id);

  const status: Status = useAppSelector((state) =>
    selectInvoiceStatusById(state, id)
  );

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
            onClick={() => console.log('"Edit" button was clicked')}
          >
            Edit
          </Button>
          <Button
            variant='delete'
            onClick={() => console.log('"Delete" button was clicked')}
          >
            Delete
          </Button>
          <Button
            variant='primary'
            onClick={() => console.log('"Mark as paid" button was clicked')}
          >
            Mark as paid
          </Button>
        </Styled.ButtonsWrapper>
      </Styled.Wrapper>
    </Card>
  );
};

export default InvoiceStatusCard;