import Typography from '../Typography/Typography';

import Styled from './Styled';

type Props = {
  variant: 'primary' | 'draft' | 'delete' | 'add' | 'discard';
  children?: string;
  onClick: () => any;
  ariaLabel?: string;
};

const Button: React.FC<Props> = ({ variant, children, onClick, ariaLabel }) => {
  switch(variant) {
    case 'primary':
      return (
        <Styled.ButtonPrimary
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h4' element='span'>
            {children}
          </Typography>
        </Styled.ButtonPrimary>
      );
    case 'draft':
      return (
        <Styled.DraftButton
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h4' element='span'>
            {children}
          </Typography>
        </Styled.DraftButton>
      );
    case 'delete':
      return (
        <Styled.DeleteButton
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h4' element='span'>
            {children}
          </Typography>
        </Styled.DeleteButton>
      );
    case 'add':
      return (
        <Styled.AddButton
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h4' element='span'>
            {`+ ${children}`}
          </Typography>
        </Styled.AddButton>
      );
    case 'discard':
      return (
        <Styled.DiscardButton
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h4' element='span'>
            {children}
          </Typography>
        </Styled.DiscardButton>
      );
    default:
      console.error('you need to specify correct \'variant\' prop');
      return (<></>);
  }
};

export default Button;