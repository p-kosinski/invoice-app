import Typography from '../Typography/Typography';

import Styled from './Styled';

type Props = {
  variant: 'primary' | 'edit' | 'draft' | 'delete' | 'add';
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
    case 'edit':
      return (
        <Styled.EditButton
          aria-label={ariaLabel}
          onClick={() => onClick()}
        >
          <Typography variant='h4' element='span'>
            {children}
          </Typography>
        </Styled.EditButton>
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
    default:
      console.error('you need to specify correct \'variant\' prop');
      return (<></>);
  }
};

export default Button;