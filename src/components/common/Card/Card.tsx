import { ReactNode } from 'react';

import Styled from './Styled';

type Props = {
  element: 'div' | 'article';
  children: ReactNode | undefined;
};

const Card: React.FC<Props> = ({ element, children }) => {
  switch(element) {
    case 'div':
      return (
        <Styled.CardDiv>
          {children}
        </Styled.CardDiv>
      );
    case 'article': {
      return (
        <Styled.CardArticle>
          {children}
        </Styled.CardArticle>
      );
    }
  default:
    return (<></>);
  }
};

export default Card;