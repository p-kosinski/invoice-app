import { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setDeletionDialogOpen } from '../../../redux/invoiceViewSlice';
import { deleteInvoice } from '../../../redux/invoicesSlice';

import { assertNotUndefined } from '../../../utils/typeUtils';

import Card from '../../common/Card/Card';
import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';

import Styled from './Styled';

const DeletionConfirmDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams<{ id?: string }>();

  assertNotUndefined(id);

  const changeDeletionDialogOpen = (open: boolean) => {
    dispatch(setDeletionDialogOpen(open))
  };

  const deleteInvoiceFromAPI = () => {
    dispatch(deleteInvoice(id));
    navigate('/');
    changeDeletionDialogOpen(false);
  };

  const cancelButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    cancelButton.current?.focus();
  }, []);

  return (
    <Styled.Dialog
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <Styled.Wrapper>
        <Card element='article'>
          <Styled.CardWrapper>
            <Typography variant='h2'>
              Confirm Deletion
            </Typography>
            <Typography variant='body1' element='p'>
              Are you sure you want to delete invoice #{id}?&nbsp;
              This action cannot be undone.
            </Typography>
            <Styled.ButtonsWrapper>
              <Button
                variant='discard'
                paddingInline='24px'
                ref={cancelButton}
                onClick={() => changeDeletionDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant='delete'
                onClick={() => deleteInvoiceFromAPI()}
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