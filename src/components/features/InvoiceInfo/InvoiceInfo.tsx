import Card from '../../common/Card/Card';
import InfoGrid from './InfoGrid/InfoGrid';
import InvoiceItems from './InvoiceItems/InvoiceItems';

import Styled from './Styled';

const InvoiceInfo: React.FC = () => (
  <Card element='article'>
    <Styled.Wrapper>
      <InfoGrid />
      <InvoiceItems />
    </Styled.Wrapper>
  </Card>
);

export default InvoiceInfo;