import styled, { css, DefaultTheme } from 'styled-components';

type Status = 'paid' | 'pending' | 'draft';

interface StatusProps {
  theme: DefaultTheme;
  $status: Status;
};

const StatusChip = styled.div<StatusProps>(
  ({theme, $status}) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    padding: 12px 0;
    border-radius: 6px;
    background-color: ${
      ($status === 'paid' && theme.colors.success.opaque)
      ||
      ($status === 'pending' && theme.colors.warning.opaque)
      ||
      ($status === 'draft' && theme.colors.black.opaque)
    };
    color: ${
      ($status === 'paid' && theme.colors.success.main)
      ||
      ($status === 'pending' && theme.colors.warning.main)
      ||
      ($status === 'draft' && theme.colors.black.main)
    };
    transition: background-color ${theme.transitionDuration} ease-in-out,
    color ${theme.transitionDuration} ease-in-out;
  `
);

const Bull = styled.div<StatusProps>(
  ({theme, $status}) => css`
    background-color: ${
      ($status === 'paid' && theme.colors.success.main)
      ||
      ($status === 'pending' && theme.colors.warning.main)
      ||
      ($status === 'draft' && theme.colors.black.main)
    };
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin-right: 8px;
    transition: background-color ${theme.transitionDuration} ease-in-out;
  `
);

const Styled = {
  StatusChip: StatusChip,
  Bull: Bull,
};

export default Styled;