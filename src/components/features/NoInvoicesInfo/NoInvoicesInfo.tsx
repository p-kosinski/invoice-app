import Typography from '../../common/Typography/Typography';

import {
  ReactComponent as IllustrationEmpty
} from '../../../assets/illustration-empty.svg';

import Styled from './Styled';

const NoInvoicesInfo: React.FC = () => (
  <Styled.NoInvoicesInfo
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.15 }}
  >
    <Styled.FlexWrapper>
      <IllustrationEmpty />
      <Styled.TextWrapper>
        <Typography variant='h2'>There is nothing here</Typography>
        <Typography variant='body1' element='p'>
          Create an invoice by clicking the <br />
          <Styled.ButtonText /> button and get started
        </Typography>
      </Styled.TextWrapper>
    </Styled.FlexWrapper>
  </Styled.NoInvoicesInfo>
);

export default NoInvoicesInfo;
