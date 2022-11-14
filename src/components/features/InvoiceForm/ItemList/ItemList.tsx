import { useAppSelector } from '../../../../hooks/reduxHooks';

import { selectFormItems } from '../../../../redux/invoicesViewSlice';
import type { FormItemsArray } from '../../../../redux/invoicesViewSlice';

import Typography from '../../../common/Typography/Typography';

import ItemListTableHeadings from './ItemListTableHeadings/ItemListTableHeadings';
import Item from './Item/Item';
import AddItemButton from './AddItemButton/AddItemButton';

import Styled from './Styled';

const ItemList: React.FC = () => {
  const items: FormItemsArray = useAppSelector(selectFormItems);

  return (
    <Styled.ItemListWrapper>
      <Typography variant='h5'>Item List</Typography>
      <ItemListTableHeadings />
      <Styled.ItemList>
        {items.map((item, i) => (
          <Item key={i} index={i} />
        ))}
        <AddItemButton />
      </Styled.ItemList>
    </Styled.ItemListWrapper>
  );
};

export default ItemList;