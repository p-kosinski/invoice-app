import { useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../hooks/reduxHooks';

import {
  selectFormItemNameByIndex,
  selectFormItemQuantityByIndex,
  selectFormItemPriceByIndex,
  setFormItemNameByIndex,
  setFormItemQuantityByIndex,
  setFormItemPriceByIndex,
  deleteFormItemByIndex
} from '../../../../../redux/invoicesViewSlice';

import TextField from '../../../../common/TextField/TextField';
import Typography from '../../../../common/Typography/Typography';

import { ReactComponent as DeleteIcon } from '../../../../../assets/icon-delete.svg';

import Styled from './Styled';

type Props = {
  index: number;
};

const Item: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();

  const itemName: string = useAppSelector((state) => 
    selectFormItemNameByIndex(state, index)
  );
  const itemQuantity: string = useAppSelector((state) => 
    selectFormItemQuantityByIndex(state, index)
  );
  const itemPrice: string = useAppSelector((state) => 
    selectFormItemPriceByIndex(state, index)
  );

  const setItemName = (newValue: string) => {
    dispatch(setFormItemNameByIndex({ index: index, newValue: newValue }));
  };
  const setItemQuantity = (newValue: string) => {
    dispatch(setFormItemQuantityByIndex({ index: index, newValue: newValue }));
  };
  const setItemPrice = (newValue: string) => {
    dispatch(setFormItemPriceByIndex({ index: index, newValue: newValue }));
  };

  const deleteItem = () => {
    dispatch(deleteFormItemByIndex(index));
  };

  const itemTotal = useMemo(() => {
    if(!itemQuantity.length || !itemPrice.length) {
      return '0.00';
    } else {
      const parsedQuantity = parseInt(itemQuantity);
      const parsedPrice = parseFloat(itemPrice);

      const total = (parsedQuantity * parsedPrice).toFixed(2);

      return total;
    }
  }, [itemQuantity, itemPrice]);

  return (
    <li>
      <Styled.ItemForm>
        <Styled.ItemNameWrapper>
          <TextField
            input='text'
            name='item-1-name'
            label='Item Name'
            value={itemName}
            onChange={setItemName}
            errorMsg={`can't be empty`}
            showLabelOnlyOnMobile
          />
        </Styled.ItemNameWrapper>
        <Styled.ItemQuantityWrapper>
          <TextField
            input='numeric'
            name='item-1-quantity'
            label='Qty.'
            value={itemQuantity}
            onChange={setItemQuantity}
            showLabelOnlyOnMobile
          />
        </Styled.ItemQuantityWrapper>
        <Styled.ItemPriceWrapper>
          <TextField
            input='decimal'
            name='item-1-price'
            label='Price'
            value={itemPrice}
            onChange={setItemPrice}
            showLabelOnlyOnMobile
          />
        </Styled.ItemPriceWrapper>
        <Styled.ItemTotalWrapper>
          <Typography variant='body1' element='p'>
            Total
          </Typography>
          <Typography variant='h4' element='p'>
            {itemTotal}
          </Typography>
        </Styled.ItemTotalWrapper>
        <Styled.ItemDeleteWrapper>
          <Styled.DeleteButton
            onClick={(e) => {
              e.preventDefault();
              deleteItem();
            }}
          >
            <DeleteIcon />
          </Styled.DeleteButton>
        </Styled.ItemDeleteWrapper>
      </Styled.ItemForm>
    </li>
  );
};

export default Item;