import styled, { css } from 'styled-components';

const CardDiv = styled.div(({ theme }) => css`
  background-color: ${theme.colors.backgrounds.card};
  box-shadow: 0px 10px 10px -10px hsla(231, 38%, 45%, 0.1);
  border-radius: 8px;
  transition: background-color ${theme.transitionDuration} ease-in-out;
`);

const CardArticle = styled.article(({ theme }) => css`
  background-color: ${theme.colors.backgrounds.card};
  box-shadow: 0px 10px 10px -10px hsla(231, 38%, 45%, 0.1);
  border-radius: 8px;
  transition: background-color ${theme.transitionDuration} ease-in-out;
`);

const Styled = {
  CardDiv: CardDiv,
  CardArticle: CardArticle,
};

export default Styled;