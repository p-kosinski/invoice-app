import { Link } from 'react-router-dom';

import Typography from '../Typography/Typography';

import { ReactComponent as PlusIcon } from '../../../assets/icon-plus.svg';

import Styled from './Styled';

const NewInvoiceLink: React.FC = () => (
  <Link to='/new'>
    <Styled.LinkButton aria-label='new invoice'>
      <Styled.AddIcon>
        <PlusIcon />
      </Styled.AddIcon>
      <Styled.TextWrapper>
        <Typography variant='h4' element='span'>
          <Styled.TextContent />
        </Typography>
      </Styled.TextWrapper>
    </Styled.LinkButton>
  </Link>
);

export default NewInvoiceLink;