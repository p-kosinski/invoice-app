import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../hooks/reduxHooks';
import {
  selectInvoiceDescriptionById,
  selectInvoiceSenderAddressById,
  selectInvoiceCreationDateById,
  selectInvoicePaymentDueById,
  selectInvoiceClientNameById,
  selectInvoiceClientAddressById,
  selectInvoiceClientEmailById
} from '../../../../redux/invoicesSlice';
import type { Address } from '../../../../redux/invoicesSlice';

import { assertNotUndefined } from '../../../../utils/typeUtils';
import { parseDateToLocaleString } from '../../../../utils/dateUtils';

import Typography from '../../../common/Typography/Typography';

import Styled from './Styled';

const InfoGrid: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  assertNotUndefined(id);

  const description: string = useAppSelector((state) =>
    selectInvoiceDescriptionById(state, id)
  );

  const senderAddress: Address = useAppSelector((state) =>
    selectInvoiceSenderAddressById(state, id)
  );

  const creationDate: string = useAppSelector((state) =>
    selectInvoiceCreationDateById(state, id)
  );

  const paymentDueDate: string = useAppSelector((state) =>
    selectInvoicePaymentDueById(state, id)
  );

  const clientName: string = useAppSelector((state) =>
    selectInvoiceClientNameById(state, id)
  );

  const clientAddress: Address = useAppSelector((state) =>
    selectInvoiceClientAddressById(state, id)
  );

  const clientEmail: string = useAppSelector((state) =>
    selectInvoiceClientEmailById(state, id)
  );

  return (
    <Styled.InfoGrid>
      <Styled.IdWrapper>
        <Typography variant='h4' element='p'>
          <Styled.IdHash>#</Styled.IdHash>{id}
        </Typography>
        <Typography variant='body1' element='p'>
          {description}
        </Typography>
      </Styled.IdWrapper>
      <Styled.SenderAddressWrapper>
        <address>
          <Typography variant='body2' element='p'>
            {senderAddress.street}
            <br />{senderAddress.city}
            <br />{senderAddress.postCode}
            <br />{senderAddress.country}
          </Typography>
        </address>
      </Styled.SenderAddressWrapper>
      <Styled.InvoiceDateWrapper>
        <Typography variant='body1' element='p'>
          Invoice Date
        </Typography>
        <Styled.ImportantText>
          <strong>{parseDateToLocaleString(creationDate)}</strong>
        </Styled.ImportantText>
      </Styled.InvoiceDateWrapper>
      <Styled.PaymentDueWrapper>
        <Typography variant='body1' element='p'>
          Payment Due
        </Typography>
        <Styled.ImportantText>
          <strong>{parseDateToLocaleString(paymentDueDate)}</strong>
        </Styled.ImportantText>
      </Styled.PaymentDueWrapper>
      <Styled.ClientAddressWrapper>
        <Styled.ClientAddress>
          <Typography variant='body1' element='p'>
            Bill To
          </Typography>
          <Styled.ImportantText>
            <strong>{clientName}</strong>
          </Styled.ImportantText>
          <address>
            <Typography variant='body2' element='p'>
              {clientAddress.street}
              <br />{clientAddress.city}
              <br />{clientAddress.postCode}
              <br />{clientAddress.country}
            </Typography>
          </address>
        </Styled.ClientAddress>
      </Styled.ClientAddressWrapper>
      <Styled.ClientEmailWrapper>
        <Typography variant='body1' element='p'>
          Sent To
        </Typography>
        <Styled.ImportantText>
          <strong>{clientEmail}</strong>
        </Styled.ImportantText>
      </Styled.ClientEmailWrapper>
    </Styled.InfoGrid>
  );
};

export default InfoGrid;