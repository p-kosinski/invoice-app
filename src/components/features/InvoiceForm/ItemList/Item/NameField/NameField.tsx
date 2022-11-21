import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';

import {
  selectItemNameByIndex,
  setItemNameByIndex
} from '../../../../../../redux/invoiceFormSlice';

import TextField from '../../../../../common/TextField/TextField';

type Props = {
  index: number;
};

const NameField: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();

  const itemName: string = useAppSelector((state) => 
    selectItemNameByIndex(state, index)
  );

  const setItemName = (newValue: string) => {
    dispatch(setItemNameByIndex({ index: index, newValue: newValue }));
  };

  return (
    <>
      <TextField
        input='text'
        name={`item-${index + 1}-name`}
        label='Item Name'
        value={itemName}
        onChange={setItemName}
        invalid={!itemName.length}
        errorMsg={`can't be empty`}
        showLabelOnlyOnMobile
      />
    </>
  );
};

export default NameField;