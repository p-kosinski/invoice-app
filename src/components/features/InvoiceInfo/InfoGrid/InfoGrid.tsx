import Typography from '../../../common/Typography/Typography';

import Styled from './Styled';

const InfoGrid: React.FC = () => (
  <Styled.InfoGrid>
    <Styled.IdWrapper>
      <Typography variant='h4' element='p'>
        <Styled.IdHash>#</Styled.IdHash>XM9141
      </Typography>
      <Typography variant='body1' element='p'>
        Graphic Design
      </Typography>
    </Styled.IdWrapper>
    <Styled.SenderAddressWrapper>
      <Typography variant='body2' element='p'>
        <address>
          19 Union Terrace
          <br />London
          <br />E1 3EZ
          <br />United Kingdom
        </address>
      </Typography>
    </Styled.SenderAddressWrapper>
    <Styled.InvoiceDateWrapper>
      <Typography variant='body1' element='p'>
        Invoice Date
      </Typography>
      <Styled.ImportantText>
        <strong>21 Aug 2021</strong>
      </Styled.ImportantText>
    </Styled.InvoiceDateWrapper>
    <Styled.PaymentDueWrapper>
      <Typography variant='body1' element='p'>
        Payment Due
      </Typography>
      <Styled.ImportantText>
        <strong>20 Sep 2021</strong>
      </Styled.ImportantText>
    </Styled.PaymentDueWrapper>
    <Styled.ClientAddressWrapper>
      <Styled.ClientAddress>
        <Typography variant='body1' element='p'>
          Bill To
        </Typography>
        <Styled.ImportantText>
          <strong>Alex Grim</strong>
        </Styled.ImportantText>
        <Typography variant='body2' element='p'>
          <address>
            84 Church Way
            <br />Bradford
            <br />BD1 9PB
            <br />United Kingdom
          </address>
        </Typography>
      </Styled.ClientAddress>
    </Styled.ClientAddressWrapper>
    <Styled.ClientEmailWrapper>
      <Typography variant='body1' element='p'>
        Sent To
      </Typography>
      <Styled.ImportantText>
        <strong>alexgrim@mail.com</strong>
      </Styled.ImportantText>
    </Styled.ClientEmailWrapper>
  </Styled.InfoGrid>
);

export default InfoGrid;