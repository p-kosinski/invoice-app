import { useAppDispatch } from '../../../../../hooks/reduxHooks';

import { addNewFormItem } from '../../../../../redux/invoicesViewSlice';

import Button from '../../../../common/Button/Button';

import styled from 'styled-components';

const AddItemButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddItemButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const addNewItem = () => dispatch(addNewFormItem());

  return (
    <AddItemButtonWrapper>
      <Button
        variant='add'
        ariaLabel='add new item'
        onClick={() => addNewItem()}
      >
        Add New Item
      </Button>
    </AddItemButtonWrapper>
  );
};

export default AddItemButton;