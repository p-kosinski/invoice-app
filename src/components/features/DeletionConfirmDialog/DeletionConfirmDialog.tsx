import Card from '../../common/Card/Card';
import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';

import Styled from './Styled';

type Props = {
  open: boolean;
};

const DeletionConfirmDialog: React.FC<Props> = ({ open }) => {
  return (
    <Styled.Dialog open={open}>
      <Styled.Wrapper>
        <Card element='article'>
          <Styled.CardWrapper>
            <Typography variant='h2'>
              Confirm Deletion
            </Typography>
            <Typography variant='body1' element='p'>
              Are you sure you want to delete invoice #XM9141?&nbsp;
              This action cannot be undone.
            </Typography>
            <Styled.ButtonsWrapper>
              <Button
                variant='discard'
                onClick={() => console.log(`'Cancel' button was clicked`)}
              >
                Cancel
              </Button>
              <Button
                variant='delete'
                onClick={() => console.log(`'Delete' button was clicked`)}
              >
                Delete
              </Button>
            </Styled.ButtonsWrapper>
          </Styled.CardWrapper>
        </Card>
      </Styled.Wrapper>
    </Styled.Dialog>
  );
};

export default DeletionConfirmDialog;