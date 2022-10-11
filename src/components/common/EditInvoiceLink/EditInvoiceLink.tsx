import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Typography from '../Typography/Typography';

const StyledEditInvoiceLink = styled(Link)(({ theme }) => css`
  border: none;
  margin: 0;
  text-decoration: none;
  display: inline-block;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${theme.colors.buttons.edit.bg};
  color: ${theme.colors.buttons.edit.text};
  cursor: pointer;
  transition:
    background-color ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out;

  &:active {
    background-color: ${theme.colors.buttons.edit.hoverBg};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.buttons.edit.hoverBg};
    }
  }
`);

const EditInvoiceLink: React.FC = () => (
  <StyledEditInvoiceLink to='edit'>
    <Typography variant='h4' element='span'>
      Edit
    </Typography>
  </StyledEditInvoiceLink>
);

export default EditInvoiceLink;