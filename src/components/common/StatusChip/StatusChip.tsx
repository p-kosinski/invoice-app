import Typography from '../Typography/Typography';

import Styled from './Styled';

type Props = {
  status: 'paid' | 'pending' | 'draft';
};

const StatusChip: React.FC<Props> = ({ status }) => {
  switch(status) {
    case 'paid':
      return (
        <Styled.StatusChip $status={status}>
          <Styled.Bull $status={status} />
          <Typography variant='h4' element='span'>
            Paid
          </Typography>
        </Styled.StatusChip>
      );
    case 'pending':
      return (
        <Styled.StatusChip $status={status}>
          <Styled.Bull $status={status} />
          <Typography variant='h4' element='span'>
            Pending
          </Typography>
        </Styled.StatusChip>
      );
    case 'draft':
      return (
        <Styled.StatusChip $status={status}>
          <Styled.Bull $status={status} />
          <Typography variant='h4' element='span'>
            Draft
          </Typography>
        </Styled.StatusChip>
      );
    default:
      console.error('you need to specify correct \'status\' prop');
      return (<></>);
  }
};

export default StatusChip;