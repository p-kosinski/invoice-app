import Container from '../../layout/Container/Container';

import DiscardButton from './DiscardButton/DiscardButton';
import SaveAsDraftButton from './SaveAsDraftButton/SaveAsDraftButton';
import SaveAndSendButton from './SaveAndSendButton/SaveAndSendButton';

import CancelButton from './CancelButton/CancelButton';
import SaveChangesButton from './SaveChangesButton/SaveChangesButton';

import Styled from './Styled';

type Props = {
  variant: 'new' | 'edit';
};

const InvoiceFormActionButtons: React.FC<Props> = ({ variant }) => (
  <Styled.Toolbar>
    <Container>
      <Styled.ToolbarWrapper $variant={variant}>
        {variant === 'new' &&
          <>
            <DiscardButton />
            <SaveAsDraftButton showOnMobile />
          </>
        }
        <Styled.ButtonsWrapper>
          {variant === 'new' &&
            <>
              <SaveAsDraftButton hideOnMobile />
              <SaveAndSendButton />
            </>
          }
          {variant === 'edit' &&
            <>
              <CancelButton />
              <SaveChangesButton />
            </>
          }
        </Styled.ButtonsWrapper>
      </Styled.ToolbarWrapper>
    </Container>
  </Styled.Toolbar>
);

export default InvoiceFormActionButtons;