import Typography from '../../common/Typography/Typography';

import SenderStreetAddress from './SenderStreetAddress/SenderStreetAddress';
import SenderCity from './SenderCity/SenderCity';
import SenderPostCode from './SenderPostCode/SenderPostCode';
import SenderCountry from './SenderCountry/SenderCountry';

import ClientName from './ClientName/ClientName';
import ClientEmail from './ClientEmail/ClientEmail';
import ClientStreetAddress from './ClientStreetAddress/ClientStreetAddress';
import ClientCity from './ClientCity/ClientCity';
import ClientPostCode from './ClientPostCode/ClientPostCode';
import ClientCountry from './ClientCountry/ClientCountry';

import IssueDate from './IssueDate/IssueDate';
import PaymentTerms from './PaymentTerms/PaymentTerms';
import Description from './Description/Description';

import ItemList from './ItemList/ItemList';

import ErrorMessages from './ErrorMessages/ErrorMessages';

import Styled from './Styled';

const InvoiceForm: React.FC = () => (
  <>
    <form>
      <Styled.BillFromFieldset>
        <Styled.Legend>
          <Typography variant='h4' element='span'>
            Bill From
          </Typography>
        </Styled.Legend>
        <SenderStreetAddress />
        <SenderCity />
        <SenderPostCode />
        <SenderCountry />
      </Styled.BillFromFieldset>
      <Styled.BillToFieldset>
        <Styled.Legend>
          <Typography variant='h4' element='span'>
            Bill To
          </Typography>
        </Styled.Legend>
        <ClientName />
        <ClientEmail />
        <ClientStreetAddress />
        <ClientCity />
        <ClientPostCode />
        <ClientCountry />
      </Styled.BillToFieldset>
      <Styled.DetailsFieldset>
        <IssueDate />
        <PaymentTerms />
        <Description />
      </Styled.DetailsFieldset>
    </form>
    <ItemList />
    <ErrorMessages />
  </>
);

export default InvoiceForm;