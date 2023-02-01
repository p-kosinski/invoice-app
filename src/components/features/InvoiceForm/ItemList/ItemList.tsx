import { useAppSelector } from '../../../../hooks/reduxHooks';

import { selectItems } from '../../../../redux/invoiceFormSlice';
import type { FormItemsArray } from '../../../../redux/invoiceFormSlice';

import Typography from '../../../common/Typography/Typography';

import ItemListTableHeadings from './ItemListTableHeadings/ItemListTableHeadings';
import Item from './Item/Item';
import AddItemButton from './AddItemButton/AddItemButton';

import Styled from './Styled';

const ItemList: React.FC = () => {
  const items: FormItemsArray = useAppSelector(selectItems);

  return (
    <Styled.ItemListWrapper>
      <Typography variant='h5'>Item List</Typography>
      <ItemListTableHeadings />
      <Styled.ItemList>
        {items.map((item, i) => (
          <Item key={i} index={i} />
        ))}
      </Styled.ItemList>
      <AddItemButton />
    </Styled.ItemListWrapper>
  );
};

export default ItemList;