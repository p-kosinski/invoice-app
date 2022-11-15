import { useAppDispatch } from '../../../../../hooks/reduxHooks';

import { addNewItem } from '../../../../../redux/invoiceFormSlice';

import Button from '../../../../common/Button/Button';

import styled from 'styled-components';

const AddItemButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddItemButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const addItem = () => dispatch(addNewItem());

  return (
    <AddItemButtonWrapper>
      <Button
        variant='add'
        ariaLabel='add new item'
        onClick={() => addItem()}
      >
        Add New Item
      </Button>
    </AddItemButtonWrapper>
  );
};

export default AddItemButton;