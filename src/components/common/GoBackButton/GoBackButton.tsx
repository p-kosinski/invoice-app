import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Typography from '../Typography/Typography';

import { ReactComponent as LeftArrowIcon } from '../../../assets/icon-arrow-left.svg';

const StyledGoBackButton = styled.button(({ theme }) => css`
  border: none;
  margin: 0;
  padding: 12px 24px;
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
`);

type Props = {
  onClick?: () => any;
};

const GoBackButton: React.FC<Props> = ({ onClick }) => {
  const navigate = useNavigate();

  if (onClick) {
    return (
      <StyledGoBackButton onClick={() => onClick()}>
        <LeftArrowIcon />
        <Typography variant='h4' element='span'>
          Go back
        </Typography>
      </StyledGoBackButton>
    );
  } else {
    return (
      <StyledGoBackButton onClick={() => navigate(-1)}>
        <LeftArrowIcon />
        <Typography variant='h4' element='span'>
          Go back
        </Typography>
      </StyledGoBackButton>
    );
  }
};

export default GoBackButton;