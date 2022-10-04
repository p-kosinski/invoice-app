import Styled from './Styled';

type Props = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2';
  children: string | React.ReactNode;
  element?: 'span' | 'p' | undefined;
};

const Typography: React.FC<Props> = ({ variant, children, element }) => {
  switch(variant) {
    case 'h1':
      if(element === 'span') {
        return (<Styled.SpanH1>{children}</Styled.SpanH1>);
      } else if(element === 'p') {
        return (<Styled.ParagraphH1>{children}</Styled.ParagraphH1>);
      } else {
        return (<Styled.H1>{children}</Styled.H1>);
      };
    case 'h2':
      if(element === 'span') {
        return (<Styled.SpanH2>{children}</Styled.SpanH2>);
      } else if(element === 'p') {
        return (<Styled.ParagraphH2>{children}</Styled.ParagraphH2>);
      } else {
        return (<Styled.H2>{children}</Styled.H2>);
      };
    case 'h3':
      if(element === 'span') {
        return (<Styled.SpanH3>{children}</Styled.SpanH3>);
      } else if(element === 'p') {
        return (<Styled.ParagraphH3>{children}</Styled.ParagraphH3>);
      } else {
        return (<Styled.H3>{children}</Styled.H3>);
      };
    case 'h4':
      if(element === 'span') {
        return (<Styled.SpanH4>{children}</Styled.SpanH4>);
      } else if(element === 'p') {
        return (<Styled.ParagraphH4>{children}</Styled.ParagraphH4>);
      } else {
        return (<Styled.H4>{children}</Styled.H4>);
      };
    case 'body1':
      if(element === 'span') {
        return (<Styled.SpanBody1>{children}</Styled.SpanBody1>);
      } else if(element === 'p') {
        return (<Styled.ParagraphBody1>{children}</Styled.ParagraphBody1>);
      } else {
        return (<Styled.SpanBody1>{children}</Styled.SpanBody1>);
      };
    case 'body2':
      if(element === 'span') {
        return (<Styled.SpanBody2>{children}</Styled.SpanBody2>);
      } else if(element === 'p') {
        return (<Styled.ParagraphBody2>{children}</Styled.ParagraphBody2>);
      } else {
        return (<Styled.SpanBody2>{children}</Styled.SpanBody2>);
      };
    default:
      return (<span>{children}</span>);
  }
};

export default Typography;