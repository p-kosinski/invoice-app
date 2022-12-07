import { useAppSelector } from '../../../hooks/reduxHooks';

import { selectThemeMode } from '../../../redux/themeSlice';
import type { ThemeMode } from '../../../redux/themeSlice';

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

const InvoiceFormActionButtons: React.FC<Props> = ({ variant }) => {
  const themeMode: ThemeMode = useAppSelector(selectThemeMode);

  return (
    <Styled.Toolbar $showShadow={themeMode === 'light'}>
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
};

export default InvoiceFormActionButtons;