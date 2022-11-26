import styled, { css } from 'styled-components';

const ItemListWrapper = styled.div(({ theme }) => css`
  margin-block: 24px;
  padding-block: 8px;

  h5 {
    margin-bottom: 24px;

    @media only screen and (min-width: ${theme.breakpoints.sm}) {
      margin-top: 0;
      margin-bottom: 12px;
    }
  }
`);

const ItemList = styled.ul(({ theme }) => css`
  margin: 0;
  padding: 0;
  text-indent: none;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 48px;

  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    row-gap: 16px;
  }
`);

const Styled = {
  ItemListWrapper: ItemListWrapper,
  ItemList: ItemList,
};

export default Styled;