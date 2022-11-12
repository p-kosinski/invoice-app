import { useState } from 'react';

import Select from '../../../common/Select/Select';

import Styled from '../Styled';

const PaymentTerms: React.FC = () => {
  const [paymentTerms, setPaymentTerms] = useState(0);
  
  return (
    <Styled.PaymentTermsWrapper>
      <Select
        name='payment-terms'
        label='Payment Terms'
        options={[
          {value: 1, label: 'Net 1 Day'},
          {value: 7, label: 'Net 7 Days'},
          {value: 14, label: 'Net 14 Days'},
          {value: 30, label: 'Net 30 Days'}
        ]}
        defaultOptionValue={30}
        onChange={setPaymentTerms}
      />
    </Styled.PaymentTermsWrapper>
  );
};

export default PaymentTerms;