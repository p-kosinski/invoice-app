import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const TextWrapper = styled.div`
  display: inline-block;
  margin: 0 8px 0 16px;
`;

const AddIcon = styled.div(({ theme }) => css`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${theme.colors.neutral.white};
  display: inline-grid;

  svg {
    place-self: center;
  }
`);

const LinkButton = styled(Link)(({ theme }) => css`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 8px 8px;
  border-radius: 24px;
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.neutral.white};
  cursor: pointer;
  transition: background-color ${theme.transitionDuration} ease-in-out;

  &:active {
    background-color: ${theme.colors.accent.light};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.accent.light};
    }
  }
`);

const TextContent = styled.span(({ theme }) => css`
  &::after {
    content: 'New';

    @media only screen and (min-width: ${theme.breakpoints.tablet}) {
      content: 'New Invoice';
    }
  }
`);

const Styled = {
  TextWrapper: TextWrapper,
  AddIcon: AddIcon,
  LinkButton: LinkButton,
  TextContent: TextContent
};

export default Styled;