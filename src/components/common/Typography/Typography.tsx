import Styled from './Styled';

type Props = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2';
  children: string | React.ReactNode;
  element?: string;
};

const Typography: React.FC<Props> = ({ variant, children, element }) => {
  switch(variant) {
    case 'h1':
      return (<Styled.H1>{children}</Styled.H1>);
    case 'h2':
      return (<Styled.H2>{children}</Styled.H2>);
    case 'h3':
      return (<Styled.H3>{children}</Styled.H3>);
    case 'h4':
      return (<Styled.H4>{children}</Styled.H4>);
    case 'body1':
      if(element === 'span') {
        return (<Styled.SpanBody1>{children}</Styled.SpanBody1>);
      } else if(element === 'p') {
        return (<Styled.ParagraphBody1>{children}</Styled.ParagraphBody1>);
      };
    case 'body2':
      if(element === 'span') {
        return (<Styled.SpanBody2>{children}</Styled.SpanBody2>);
      } else if(element === 'p') {
        return (<Styled.ParagraphBody2>{children}</Styled.ParagraphBody2>);
      };
    default:
      return (<span>{children}</span>);
  }
};

export default Typography;