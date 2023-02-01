import {
  useAppSelector,
  useAppDispatch
} from '../../../../../hooks/reduxHooks';

import { addNewItem } from '../../../../../redux/invoiceFormSlice';
import { selectDrawerOpen } from '../../../../../redux/invoicesViewSlice';

import Button from '../../../../common/Button/Button';

import styled, { css } from 'styled-components';

const AddItemButtonWrapper = styled.div(({ theme }) => css`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    margin-top: 16px;
  }
`);

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