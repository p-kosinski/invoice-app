import { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import {
  addStatusFilter,
  removeStatusFilter,
  resetStatusFilters,
  selectStatusFilters
} from '../../../redux/invoicesViewSlice';
import type {
  StatusFilter,
  StatusFiltersArray
} from '../../../redux/invoicesViewSlice';

import Typography from '../../common/Typography/Typography';

import {
  ReactComponent as ArrowDownIcon
} from '../../../assets/icon-arrow-down.svg';

import Styled from './Styled';

const InvoicesStatusFilters: React.FC = () => {
  const dispatch = useAppDispatch();

  const statusFilters: StatusFiltersArray = useAppSelector(selectStatusFilters);

  const addInvoiceStatusFilter = (filter: StatusFilter) => {
    dispatch(addStatusFilter(filter));
  };

  const removeInvoiceStatusFilter = (filter: StatusFilter) => {
    dispatch(removeStatusFilter(filter));
  };

  const resetInvoiceStatusFilters = () => {
    dispatch(resetStatusFilters());
  };

  const [filtersOpened, setFiltersOpened] = useState(false);

  const FILTERS = ['draft', 'pending', 'paid'] as const;
  type Filter = typeof FILTERS[number];

  const isStatusFilter = (value: string): value is Filter => {
    return FILTERS.includes(value as Filter);
  };

  const handleCheckboxChange = () => (e: ChangeEvent<HTMLInputElement>) => {
    if (isStatusFilter(e.target.value)) {
      e.target.checked ? addInvoiceStatusFilter(e.target.value)
                       : removeInvoiceStatusFilter(e.target.value);
    }
  };

  const handleCheckboxKeyDown =
    (value: StatusFilter) => (
      e: KeyboardEvent<HTMLInputElement> & {
        target: HTMLInputElement;
      }
    ) => {
      switch (e.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          if (!e.target.checked) {
            e.target.checked = true;
            addInvoiceStatusFilter(value);
          } else {
            e.target.checked = false;
            removeInvoiceStatusFilter(value);
          }

          break;
        default:
          break;
      }
    };

  useEffect(() => {
    return () => {
      resetInvoiceStatusFilters();
    };
  }, []);

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
        <Styled.Filters aria-hidden={!filtersOpened} $visible={filtersOpened}>
          <Styled.InputWrapper>
            <Styled.Label>
              <Styled.Input
                type='checkbox'
                id='draft'
                name='draft'
                value='draft'
                tabIndex={0}
                checked={statusFilters.includes('draft')}
                onKeyDown={handleCheckboxKeyDown('draft')}
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
                tabIndex={0}
                checked={statusFilters.includes('pending')}
                onKeyDown={handleCheckboxKeyDown('pending')}
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
                tabIndex={0}
                checked={statusFilters.includes('paid')}
                onKeyDown={handleCheckboxKeyDown('paid')}
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