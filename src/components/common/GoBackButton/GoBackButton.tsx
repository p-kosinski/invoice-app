import { useNavigate } from 'react-router-dom';
import styled, { css, DefaultTheme } from 'styled-components';

import Typography from '../Typography/Typography';

import { ReactComponent as LeftArrowIcon } from '../../../assets/icon-arrow-left.svg';

type StyledGoBackButtonProps = {
  theme: DefaultTheme;
  noInlinePadding?: boolean;
};

const StyledGoBackButton = styled.button<StyledGoBackButtonProps>(
  ({ theme, noInlinePadding }) => css`
    border: none;
    padding: ${noInlinePadding ? '12px 0' : '12px 24px'};
    background-color: transparent;
    color: ${theme.colors.text.main};
    cursor: pointer;
    border-radius: 24px;
    outline: 1px solid transparent;
    transition:
      color ${theme.transitionDuration} ease-in-out,
      outline ${theme.transitionDuration} ease-in-out;

    svg {
      margin-right: 24px;
    }

    @media (hover: hover) {
      &:hover {
        color: ${theme.colors.text.goBackBtnHover};
      }
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.accent.main};
    }
  `
);

type Props = {
  noInlinePadding?: boolean;
  onClick?: () => any;
};

const GoBackButton: React.FC<Props> = ({ noInlinePadding, onClick }) => {
  const navigate = useNavigate();

  if (onClick) {
    return (
      <StyledGoBackButton
        noInlinePadding={noInlinePadding}
        onClick={() => onClick()}
      >
        <LeftArrowIcon />
        <Typography variant='h4' element='span'>
          Go back
        </Typography>
      </StyledGoBackButton>
    );
  } else {
    return (
      <StyledGoBackButton
        noInlinePadding={noInlinePadding}
        onClick={() => navigate(-1)}
      >
        <LeftArrowIcon />
        <Typography variant='h4' element='span'>
          Go back
        </Typography>
      </StyledGoBackButton>
    );
  }
};

export default GoBackButton;