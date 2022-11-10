import { forwardRef } from 'react';

import Typography from '../Typography/Typography';

import { ReactComponent as PlusIcon } from '../../../assets/icon-plus.svg';

import Styled from './Styled';

type Props = {
  variant: 'primary' | 'draft' | 'delete' | 'add' | 'discard' | 'newInvoice';
  ariaLabel?: string;
  showOnMobile?: boolean;
  hideOnMobile?: boolean;
  children?: string;
  onClick: () => any;
};

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>(({
  variant,
  showOnMobile,
  hideOnMobile,
  ariaLabel,
  children,
  onClick,
}, ref) => {
  switch(variant) {
    case 'primary':
      return (
        <Styled.ButtonPrimary
          aria-label={ariaLabel}
          onClick={() => onClick()}
          $showOnMobile={showOnMobile}
          $hideOnMobile={hideOnMobile}
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
          $showOnMobile={showOnMobile}
          $hideOnMobile={hideOnMobile}
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
          $showOnMobile={showOnMobile}
          $hideOnMobile={hideOnMobile}
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
          $showOnMobile={showOnMobile}
          $hideOnMobile={hideOnMobile}
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
          $showOnMobile={showOnMobile}
          $hideOnMobile={hideOnMobile}
          ref={ref}
        >
          <Typography variant='h4' element='span'>
            {children}
          </Typography>
        </Styled.DiscardButton>
      );
    case 'newInvoice':
      return (
        <Styled.NewInvoiceButton
          aria-label={ariaLabel}
          onClick={() => onClick()}
          $showOnMobile={showOnMobile}
          $hideOnMobile={hideOnMobile}
        >
          <Styled.AddIcon>
            <PlusIcon />
          </Styled.AddIcon>
          <Styled.TextWrapper>
            <Typography variant='h4' element='span'>
              <Styled.TextContent />
            </Typography>
          </Styled.TextWrapper>
        </Styled.NewInvoiceButton>
      );
    default:
      console.error('you need to specify correct \'variant\' prop');
      return (<></>);
  }
});

export default Button;