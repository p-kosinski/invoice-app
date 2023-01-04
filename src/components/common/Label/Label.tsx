import styled, { css, DefaultTheme } from 'styled-components';

import Typography from '../Typography/Typography';

type Props = {
  htmlFor: string;
  invalid?: boolean;
  text: string;
};

type LabelProps = {
  theme: DefaultTheme;
  $invalid?: boolean;
};

const StyledLabel = styled.label<LabelProps>(
  ({ theme, $invalid }) => css`
    display: block;
    margin-bottom: 12px;
    color: ${$invalid ? theme.colors.error.main
                      : theme.colors.formElements.labelsText};
    transition: color ${theme.transitionDuration} ease-in-out;
  `
);

const Label: React.FC<Props> = ({ htmlFor, invalid, text }) => (
  <StyledLabel htmlFor={htmlFor} $invalid={invalid}>
    <Typography variant='body1' element='span'>
      {text}
    </Typography>
  </StyledLabel>
);

export default Label;