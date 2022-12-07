import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';

import {
  selectPaymentTerms,
  setPaymentTerms
} from '../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../redux/invoicesViewSlice';

import Select from '../../../common/Select/Select';

import Styled from '../Styled';

type Props = {
  edit?: boolean;
};

const PaymentTerms: React.FC<Props> = ({ edit }) => {
  const dispatch = useAppDispatch();

  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);
  const paymentTerms: number = useAppSelector(selectPaymentTerms);

  const changePaymentTerms = (newValue: number) => {
    dispatch(setPaymentTerms(newValue));
  };
  
  return (
    <Styled.PaymentTermsWrapper>
      <Select
        name='payment-terms'
        label='Payment Terms'
        ariaLabel='select payment terms'
        buttonTabIndex={drawerOpen ? 0 : -1}
        options={[
          {value: 1, label: 'Net 1 Day'},
          {value: 7, label: 'Net 7 Days'},
          {value: 14, label: 'Net 14 Days'},
          {value: 30, label: 'Net 30 Days'}
        ]}
        defaultOptionValue={edit ? undefined : 30}
        selectedValue={paymentTerms}
        onChange={changePaymentTerms}
      />
    </Styled.PaymentTermsWrapper>
  );
};

export default PaymentTerms;