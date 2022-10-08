import Card from '../../common/Card/Card';
import Typography from '../../common/Typography/Typography';
import StatusChip from '../../common/StatusChip/StatusChip';
import Button from '../../common/Button/Button';

import Styled from './Styled';

const InvoiceStatusCard: React.FC = () => (
  <Card element='div'>
    <Styled.Wrapper>
      <Styled.StatusWrapper>
        <Typography variant='body1' element='span'>
          Status
        </Typography>
        <StatusChip status='pending' />
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

export default InvoiceStatusCard;