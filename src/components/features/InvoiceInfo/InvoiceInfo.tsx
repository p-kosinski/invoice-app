import Card from '../../common/Card/Card';
import InfoGrid from './InfoGrid/InfoGrid';
import InvoiceItems from './InvoiceItems/InvoiceItems';
import AnimateMount from '../../common/AnimateMount/AnimateMount';

import Styled from './Styled';

const InvoiceInfo: React.FC = () => (
  <AnimateMount variant='fadeAndGrow'>
    <Card element='article'>
      <Styled.Wrapper>
        <InfoGrid />
        <InvoiceItems />
      </Styled.Wrapper>
    </Card>
  </AnimateMount>
  
);

export default InvoiceInfo;