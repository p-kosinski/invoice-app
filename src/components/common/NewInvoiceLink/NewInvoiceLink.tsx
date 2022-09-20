import Typography from '../Typography/Typography';

import { ReactComponent as PlusIcon } from '../../../assets/icon-plus.svg';

import Styled from './Styled';

const NewInvoiceLink: React.FC = () => (
  <Styled.LinkButton to='/new' aria-label='new invoice'>
    <Styled.AddIcon>
      <PlusIcon />
    </Styled.AddIcon>
    <Styled.TextWrapper>
      <Typography variant='h4' element='span'>
        <Styled.TextContent />
      </Typography>
    </Styled.TextWrapper>
  </Styled.LinkButton>
);

export default NewInvoiceLink;