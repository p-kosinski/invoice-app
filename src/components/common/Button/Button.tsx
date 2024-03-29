import { forwardRef } from 'react';

import Typography from '../Typography/Typography';

import { ReactComponent as PlusIcon } from '../../../assets/icon-plus.svg';

import Styled from './Styled';

type Variant =
  | 'primary'
  | 'draft'
  | 'delete'
  | 'add'
  | 'discard'
  | 'edit'
  | 'newInvoice';

type Props = {
  variant: Variant;
  tabIndex?: number;
  ariaLabel?: string;
  showOnMobile?: boolean;
  hideOnMobile?: boolean;
  paddingInline?: string;
  children?: string;
  onClick: () => any;
};

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>(({
  variant,
  tabIndex,
  showOnMobile,
  hideOnMobile,
  paddingInline,
  ariaLabel,
  children,
  onClick,
}, ref) => {
  switch(variant) {
    case 'primary':
      return (
        <Styled.ButtonPrimary
          tabIndex={tabIndex}
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
          tabIndex={tabIndex}
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
          tabIndex={tabIndex}
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
          tabIndex={tabIndex}
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
          tabIndex={tabIndex}
          aria-label={ariaLabel}
          onClick={() => onClick()}
          $showOnMobile={showOnMobile}
          $hideOnMobile={hideOnMobile}
          $paddingInline={paddingInline}
          ref={ref}
        >
          <Typography variant='h4' element='span'>
            {children}
          </Typography>
        </Styled.DiscardButton>
      );
    case 'edit':
      return (
        <Styled.EditButton
          tabIndex={tabIndex}
          aria-label={ariaLabel}
          onClick={() => onClick()}
          $showOnMobile={showOnMobile}
          $hideOnMobile={hideOnMobile}
          ref={ref}
        >
          <Typography variant='h4' element='span'>
            {children}
          </Typography>
        </Styled.EditButton>
      );
    case 'newInvoice':
      return (
        <Styled.NewInvoiceButton
          tabIndex={tabIndex}
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

Button.defaultProps = {
  tabIndex: 0,
};

export default Button;