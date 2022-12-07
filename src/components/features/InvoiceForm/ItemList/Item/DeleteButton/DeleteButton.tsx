import styled, { css } from 'styled-components';

import {
  useAppSelector,
  useAppDispatch
} from '../../../../../../hooks/reduxHooks';

import { deleteItemByIndex } from '../../../../../../redux/invoiceFormSlice';
import {
  selectDrawerOpen as selectInvoicesDrawerOpen
} from '../../../../../../redux/invoicesViewSlice';
import {
  selectDrawerOpen as selectInvoiceDrawerOpen
} from '../../../../../../redux/invoiceViewSlice';

import {
  ReactComponent as DeleteIcon
} from '../../../../../../assets/icon-delete.svg';

const StyledDeleteButton = styled.button(({ theme }) => css`
  border: none;
  padding: 15.5px 12px;
  background-color: transparent;
  border-radius: 4px;
  outline: 1px solid transparent;
  cursor: pointer;
  transition: outline ${theme.transitionDuration} ease-in-out;

  svg {
    display: block;
    fill: ${theme.colors.lightGrey.main};
    transition: fill ${theme.transitionDuration} ease-in-out;
  }

  &:active {
    svg {
      fill: ${theme.colors.error.main};
    }
  }

  :focus-visible {
    outline: 1px solid ${theme.colors.accent.main};
  }

  @media (hover: hover) {
    &:hover {
      svg {
        fill: ${theme.colors.error.main};
      }
    }
  }
`);

type Props = {
  index: number;
};

const DeleteButton: React.FC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();

  const invoicesDrawerOpen: boolean = useAppSelector(selectInvoicesDrawerOpen);
  const invoiceDrawerOpen: boolean = useAppSelector(selectInvoiceDrawerOpen);

  const deleteItem = () => {
    dispatch(deleteItemByIndex(index));
  };

  return (
    <StyledDeleteButton
      tabIndex={(invoicesDrawerOpen || invoiceDrawerOpen) ? 0 : -1}
      onClick={(e) => {
        e.preventDefault();
        deleteItem();
      }}
    >
      <DeleteIcon />
    </StyledDeleteButton>
  );
};

export default DeleteButton;