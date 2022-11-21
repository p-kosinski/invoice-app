import { useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../hooks/reduxHooks';

import {
  selectItemNameByIndex,
  selectItemQuantityByIndex,
  selectItemPriceByIndex,
  setItemNameByIndex,
  setItemQuantityByIndex,
  setItemPriceByIndex,
  deleteItemByIndex
} from '../../../../../redux/invoiceFormSlice';

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
    selectItemNameByIndex(state, index)
  );
  const itemQuantity: string = useAppSelector((state) => 
    selectItemQuantityByIndex(state, index)
  );
  const itemPrice: string = useAppSelector((state) => 
    selectItemPriceByIndex(state, index)
  );

  const setItemName = (newValue: string) => {
    dispatch(setItemNameByIndex({ index: index, newValue: newValue }));
  };
  const setItemQuantity = (newValue: string) => {
    dispatch(setItemQuantityByIndex({ index: index, newValue: newValue }));
  };
  const setItemPrice = (newValue: string) => {
    dispatch(setItemPriceByIndex({ index: index, newValue: newValue }));
  };

  const deleteItem = () => {
    dispatch(deleteItemByIndex(index));
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
            invalid={!itemName.length}
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
            invalid={!itemQuantity.length}
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
            invalid={!itemPrice.length}
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