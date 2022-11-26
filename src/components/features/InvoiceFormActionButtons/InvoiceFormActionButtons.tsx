import { useAppSelector } from '../../../hooks/reduxHooks';

import { selectThemeMode } from '../../../redux/themeSlice';
import type { ThemeMode } from '../../../redux/themeSlice';

import Container from '../../layout/Container/Container';

import DiscardButton from './DiscardButton/DiscardButton';
import SaveAsDraftButton from './SaveAsDraftButton/SaveAsDraftButton';
import SaveAndSendButton from './SaveAndSendButton/SaveAndSendButton';

import Styled from './Styled';

const InvoiceFormActionButtons: React.FC = () => {
  const themeMode: ThemeMode = useAppSelector(selectThemeMode);

  return (
    <Styled.Toolbar $showShadow={themeMode === 'light'}>
      <Container>
        <Styled.ToolbarWrapper>
          <DiscardButton />
          <SaveAsDraftButton showOnMobile />
          <Styled.SaveButtonsWrapper>
            <SaveAsDraftButton hideOnMobile />
            <SaveAndSendButton />
          </Styled.SaveButtonsWrapper>
        </Styled.ToolbarWrapper>
      </Container>
    </Styled.Toolbar>
  );
};

export default InvoiceFormActionButtons;