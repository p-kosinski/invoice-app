import Container from '../../layout/Container/Container';
import Button from '../../common/Button/Button';

import Styled from './Styled';

const InvoiceActionButtons: React.FC = () => (
  <Styled.Toolbar>
    <Container>
      <Styled.Wrapper>
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
      </Styled.Wrapper>
    </Container>
  </Styled.Toolbar>
);

export default InvoiceActionButtons;