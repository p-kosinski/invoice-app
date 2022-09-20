import Typography from '../../common/Typography/Typography';

import Styled from './Styled';

const InvoicesHeading: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Typography variant='h1'>
        Invoices
      </Typography>
      <Typography variant='body1' element='p'>
        <Styled.SpanHiddenOnMobile>
          There are&nbsp;
        </Styled.SpanHiddenOnMobile>
        7
        <Styled.SpanHiddenOnMobile>
          &nbsp;total
        </Styled.SpanHiddenOnMobile>
        &nbsp;invoices
      </Typography>
    </Styled.Wrapper>
  );
};

export default InvoicesHeading;