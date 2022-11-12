import { useState } from 'react';

import Typography from '../../../common/Typography/Typography';
import TextField from '../../../common/TextField/TextField';
import Button from '../../../common/Button/Button';

import { ReactComponent as DeleteIcon } from '../../../../assets/icon-delete.svg';

import Styled from './Styled';

const ItemList: React.FC = () => {
  const [item1Name, setItem1Name] = useState(''); 
  const [item1Quantity, setItem1Quantity] = useState('1');
  const [item1Price, setItem1Price] = useState('156.00');

  const [item2Name, setItem2Name] = useState(''); 
  const [item2Quantity, setItem2Quantity] = useState('2');
  const [item2Price, setItem2Price] = useState('200.00');

  return (
    <Styled.ItemListWrapper>
      <Typography variant='h5'>Item List</Typography>
      <Styled.ItemListTableHeadings>
        <Styled.ItemNameWrapper>
          <Typography variant='body1' element='p'>
            Item Name
          </Typography>
        </Styled.ItemNameWrapper>
        <Styled.ItemQuantityWrapper>
          <Typography variant='body1' element='p'>
            Qty.
          </Typography>
        </Styled.ItemQuantityWrapper>
        <Styled.ItemPriceWrapper>
          <Typography variant='body1' element='p'>
            Price
          </Typography>
        </Styled.ItemPriceWrapper>
        <Styled.ItemTotalWrapper $showLabel>
          <Typography variant='body1' element='p'>
            Total
          </Typography>
        </Styled.ItemTotalWrapper>
        <Styled.ItemDeleteWrapper>
          <Styled.DeleteButtonPlaceholder />
        </Styled.ItemDeleteWrapper>
      </Styled.ItemListTableHeadings>
      <Styled.ItemList>
        <li>
          <Styled.ItemForm>
            <Styled.ItemNameWrapper>
              <TextField
                input='text'
                name='item-1-name'
                label='Item Name'
                value={item1Name}
                onChange={setItem1Name}
                errorMsg={`can't be empty`}
                showLabelOnlyOnMobile
              />
            </Styled.ItemNameWrapper>
            <Styled.ItemQuantityWrapper>
              <TextField
                input='numeric'
                name='item-1-quantity'
                label='Qty.'
                value={item1Quantity}
                onChange={setItem1Quantity}
                showLabelOnlyOnMobile
              />
            </Styled.ItemQuantityWrapper>
            <Styled.ItemPriceWrapper>
              <TextField
                input='decimal'
                name='item-1-price'
                label='Price'
                value={item1Price}
                onChange={setItem1Price}
                showLabelOnlyOnMobile
              />
            </Styled.ItemPriceWrapper>
            <Styled.ItemTotalWrapper>
              <Typography variant='body1' element='p'>
                Total
              </Typography>
              <Typography variant='h4' element='p'>
                156.00
              </Typography>
            </Styled.ItemTotalWrapper>
            <Styled.ItemDeleteWrapper>
              <Styled.DeleteButton>
                <DeleteIcon />
              </Styled.DeleteButton>
            </Styled.ItemDeleteWrapper>
          </Styled.ItemForm>
        </li>
        <li>
          <Styled.ItemForm>
            <Styled.ItemNameWrapper>
              <TextField
                input='text'
                name='item-2-name'
                label='Item Name'
                value={item2Name}
                onChange={setItem2Name}
                errorMsg={`can't be empty`}
                showLabelOnlyOnMobile
              />
            </Styled.ItemNameWrapper>
            <Styled.ItemQuantityWrapper>
              <TextField
                input='numeric'
                name='item-2-quantity'
                label='Qty.'
                value={item2Quantity}
                onChange={setItem2Quantity}
                showLabelOnlyOnMobile
              />
            </Styled.ItemQuantityWrapper>
            <Styled.ItemPriceWrapper>
              <TextField
                input='decimal'
                name='item-2-price'
                label='Price'
                value={item2Price}
                onChange={setItem2Price}
                showLabelOnlyOnMobile
              />
            </Styled.ItemPriceWrapper>
            <Styled.ItemTotalWrapper>
              <Typography variant='body1' element='p'>
                Total
              </Typography>
              <Typography variant='h4' element='p'>
                400.00
              </Typography>
            </Styled.ItemTotalWrapper>
            <Styled.ItemDeleteWrapper>
              <Styled.DeleteButton>
                <DeleteIcon />
              </Styled.DeleteButton>
            </Styled.ItemDeleteWrapper>
          </Styled.ItemForm>
        </li>
        <Styled.AddItemButtonWrapper>
          <Button
            variant='add'
            ariaLabel='add new item'
            onClick={() => console.log('`Add New Item` was clicked')}
          >
            Add New Item
          </Button>
        </Styled.AddItemButtonWrapper>
      </Styled.ItemList>
    </Styled.ItemListWrapper>
  );
};

export default ItemList;