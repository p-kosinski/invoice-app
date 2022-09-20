import Typography from '../Typography/Typography';

import Styled from './Styled';

type Props = {
  variant: 'button1' | 'button2' | 'button3' | 'button4' | 'button5' | 'button6';
  children?: string;
  onClick: () => any;
  ariaLabel?: string;
};

const Button: React.FC<Props> = ({ variant, children, onClick, ariaLabel }) => {
  switch(variant) {
    case 'button1':
      return (
        <Styled.Button1
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h3' element='span'>
            {children}
          </Typography>
        </Styled.Button1>
      );
    case 'button2':
      return (
        <Styled.Button2
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h3' element='span'>
            {children}
          </Typography>
        </Styled.Button2>
      );
    case 'button3':
      return (
        <Styled.Button3
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h3' element='span'>
            {children}
          </Typography>
        </Styled.Button3>
      );
    case 'button4':
      return (
        <Styled.Button4
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h3' element='span'>
            {children}
          </Typography>
        </Styled.Button4>
      );
    case 'button5':
      return (
        <Styled.Button5
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h3' element='span'>
            {`+ ${children}`}
          </Typography>
        </Styled.Button5>
      );
    default:
      console.error('you need to specify correct \'variant\' prop');
      return (<></>);
  }
};

export default Button;