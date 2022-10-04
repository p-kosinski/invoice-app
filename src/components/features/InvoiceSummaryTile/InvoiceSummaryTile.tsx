import { useAppSelector } from '../../../hooks/reduxHooks';
import {
  selectInvoiceClientNameById,
  selectInvoicePaymentDueById,
  selectInvoiceTotalById,
  selectInvoiceStatusById,
} from '../../../redux/invoicesSlice';
import type { Status } from '../../../redux/invoicesSlice';

import { parseDateToLocaleString } from '../../../utils/dateUtils';
import { parsePriceToGBP } from '../../../utils/priceUtils';

import Typography from '../../common/Typography/Typography';
import StatusChip from '../../common/StatusChip/StatusChip';

import Card from '../../common/Card/Card';

import { ReactComponent as ArrowRightIcon } from '../../../assets/icon-arrow-right.svg';

import Styled from './Styled';

type Props = {
  id: string;
};

const InvoiceSummaryTile: React.FC<Props> = ({ id }) => {
  const clientName: string = useAppSelector((state) =>
    selectInvoiceClientNameById(state, id)
  );
  const paymentDue: string = useAppSelector((state) =>
    selectInvoicePaymentDueById(state, id)
  );
  const total: number = useAppSelector((state) =>
    selectInvoiceTotalById(state, id)
  );
  const status: Status = useAppSelector((state) =>
    selectInvoiceStatusById(state, id)
  );

  return (
    <Styled.RouterLink to={`/${id}`}>
      <Card element='article'>
        <Styled.Wrapper>
          <Styled.GridWrapper>
            <Styled.IdWrapper>
              <Typography variant='h4' element='span'>
                <Styled.IdHash>#</Styled.IdHash>
                <Styled.Id>{id}</Styled.Id>
              </Typography>
            </Styled.IdWrapper>
            <Styled.ClientNameWrapper>
              <Typography variant='body1' element='span'>
                {clientName}
              </Typography>
            </Styled.ClientNameWrapper>
            <Styled.PaymentDueWrapper>
              <Typography variant='body1' element='span'>
                {`Due ${parseDateToLocaleString(paymentDue)}`}
              </Typography>
            </Styled.PaymentDueWrapper>
            <Styled.TotalPriceWrapper>
              <Typography variant='h3' element='span'>
                {parsePriceToGBP(total)}
              </Typography>
            </Styled.TotalPriceWrapper>
            <Styled.StatusChipWrapper>
              <StatusChip status={status} />
              <ArrowRightIcon />
            </Styled.StatusChipWrapper>
          </Styled.GridWrapper>
        </Styled.Wrapper>
      </Card>
    </Styled.RouterLink>
  );
};

export default InvoiceSummaryTile;
