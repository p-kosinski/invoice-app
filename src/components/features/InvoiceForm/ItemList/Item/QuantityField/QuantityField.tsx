import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemQuantityByIndex,
  setItemQuantityByIndex
} from '../../../../../../redux/invoiceFormSlice';

import TextField from '../../../../../common/TextField/TextField';

type Props = {
  index: number;
};

const QuantityField: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();
  
  const itemQuantity: string = useAppSelector((state) => 
    selectItemQuantityByIndex(state, index)
  );

  const setItemQuantity = (newValue: string) => {
    dispatch(setItemQuantityByIndex({ index: index, newValue: newValue }));
  };

  return (
    <>
      <TextField
        input='numeric'
        name={`item-${index + 1}-name`}
        label='Qty.'
        value={itemQuantity}
        onChange={setItemQuantity}
        invalid={!itemQuantity.length}
        showLabelOnlyOnMobile
      />
    </>
  );
};

export default QuantityField;