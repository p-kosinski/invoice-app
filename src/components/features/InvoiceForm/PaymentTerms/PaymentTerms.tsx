import { useState } from 'react';

import Select from '../../../common/Select/Select';

import Styled from '../Styled';

const PaymentTerms: React.FC = () => {
  const [paymentTerms, setPaymentTerms] = useState('');
  
  return (
    <Styled.PaymentTermsWrapper>
      <Select
        name='payment-terms'
        label='Payment Terms'
        options={[
          {value: '1d', label: 'Net 1 Day'},
          {value: '7d', label: 'Net 7 Days'},
          {value: '14d', label: 'Net 14 Days'},
          {value: '30d', label: 'Net 30 Days'}
        ]}
        defaultOptionValue='30d'
        onChange={setPaymentTerms}
      />
    </Styled.PaymentTermsWrapper>
  );
};

export default PaymentTerms;