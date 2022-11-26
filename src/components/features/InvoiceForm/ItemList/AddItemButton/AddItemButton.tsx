import {
  useAppSelector,
  useAppDispatch
} from '../../../../../hooks/reduxHooks';

import { addNewItem } from '../../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../../redux/invoicesViewSlice';

import Button from '../../../../common/Button/Button';

import styled from 'styled-components';

const AddItemButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddItemButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const addItem = () => dispatch(addNewItem());

  return (
    <AddItemButtonWrapper>
      <Button
        variant='add'
        tabIndex={drawerOpen ? 0 : -1}
        ariaLabel='add new item'
        onClick={() => addItem()}
      >
        Add New Item
      </Button>
    </AddItemButtonWrapper>
  );
};

export default AddItemButton;