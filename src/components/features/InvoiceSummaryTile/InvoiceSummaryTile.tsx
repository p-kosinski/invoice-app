import Typography from '../../common/Typography/Typography';
import StatusChip from '../../common/StatusChip/StatusChip';

import Card from '../../common/Card/Card';

import { ReactComponent as ArrowRightIcon } from '../../../assets/icon-arrow-right.svg';

import Styled from './Styled';

type Props = {

};

const InvoiceSummaryTile: React.FC<Props> = ({  }) => (
  <Card element='article'>
    <Styled.Wrapper>
      <Styled.GridWrapper>
        <Styled.IdWrapper>
          <Typography variant='h4' element='span'>
            <Styled.IdHash>
              #
            </Styled.IdHash>
            <Styled.Id>
              RT3080
            </Styled.Id>
          </Typography>
        </Styled.IdWrapper>
        <Styled.ClientNameWrapper>
          <Typography variant='body1' element='span'>
            Jensen Huang
          </Typography>
        </Styled.ClientNameWrapper>
        <Styled.PaymentDueWrapper>
          <Typography variant='body1' element='span'>
            Due 19 Aug 2021
          </Typography>
        </Styled.PaymentDueWrapper>
        <Styled.TotalPriceWrapper>
          <Typography variant='h3' element='span'>
            £ 1,800.90
          </Typography>
        </Styled.TotalPriceWrapper>
        <Styled.StatusChipWrapper>
          <StatusChip status='paid' />
          <ArrowRightIcon />
        </Styled.StatusChipWrapper>
      </Styled.GridWrapper>
    </Styled.Wrapper>
  </Card>
);

export default InvoiceSummaryTile;