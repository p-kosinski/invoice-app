import { useState, ChangeEvent } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addStatusFilter, removeStatusFilter } from '../../../redux/invoicesViewSlice';
import type { StatusFilter } from '../../../redux/invoicesViewSlice';

import Typography from '../../common/Typography/Typography';

import { ReactComponent as ArrowDownIcon } from '../../../assets/icon-arrow-down.svg';

import Styled from './Styled';

const InvoicesStatusFilters: React.FC = () => {
  const dispatch = useAppDispatch();

  const addInvoiceStatusFilter = (filter: StatusFilter) => {
    dispatch(addStatusFilter(filter));
  };

  const removeInvoiceStatusFilter = (filter: StatusFilter) => {
    dispatch(removeStatusFilter(filter));
  };

  const [filtersOpened, setFiltersOpened] = useState(false);

  const handleCheckboxChange = () => (e: ChangeEvent<HTMLInputElement>) => {
    const FILTERS = ['draft', 'pending', 'paid'] as const;
    type Filter = typeof FILTERS[number];

    const isStatusFilter = (value: string): value is Filter => {
      return FILTERS.includes(value as Filter);
    };

    if(isStatusFilter(e.target.value)) {
      e.target.checked ? addInvoiceStatusFilter(e.target.value)
                       : removeInvoiceStatusFilter(e.target.value)
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setFiltersOpened(false)}>
      <Styled.Wrapper>
        <Styled.FiltersButton
          aria-haspopup='menu'
          aria-expanded={filtersOpened}
          onClick={() => setFiltersOpened(!filtersOpened)}
        >
          <Typography variant='h4' element='span'>
            <Styled.ButtonText />
          </Typography>
          <ArrowDownIcon />
        </Styled.FiltersButton>
        <Styled.Filters
          aria-hidden={!filtersOpened}
          $visible={filtersOpened}
        >
          <Styled.InputWrapper>
            <Styled.Label>
              <Styled.Input
                type='checkbox'
                id='draft'
                name='draft'
                value='draft'
                onChange={handleCheckboxChange()}
              />
              <Typography variant='h4' element='span'>
                Draft
              </Typography>
            </Styled.Label>
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.Label>
              <Styled.Input
                type='checkbox'
                id='pending'
                name='pending'
                value='pending'
                onChange={handleCheckboxChange()}
              />
              <Typography variant='h4' element='span'>
                Pending
              </Typography>
            </Styled.Label>
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.Label>
              <Styled.Input
                type='checkbox'
                id='paid'
                name='paid'
                value='paid'
                onChange={handleCheckboxChange()}
              />
              <Typography variant='h4' element='span'>
                Paid
              </Typography>
            </Styled.Label>
          </Styled.InputWrapper>
        </Styled.Filters>
      </Styled.Wrapper>
    </ClickAwayListener>
  );
};

export default InvoicesStatusFilters;