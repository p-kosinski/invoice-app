import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemPriceByIndex,
  setItemPriceByIndex
} from '../../../../../../redux/invoiceFormSlice';

import TextField from '../../../../../common/TextField/TextField';

type Props = {
  index: number;
};

const PriceField: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();

  const itemPrice: string = useAppSelector((state) => 
    selectItemPriceByIndex(state, index)
  );

  const setItemPrice = (newValue: string) => {
    dispatch(setItemPriceByIndex({ index: index, newValue: newValue }));
  };

  return (
    <>
      <TextField
        input='decimal'
        name='item-1-price'
        label='Price'
        value={itemPrice}
        onChange={setItemPrice}
        invalid={!itemPrice.length}
        showLabelOnlyOnMobile
      />
    </>
  );
};

export default PriceField;