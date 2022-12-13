import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerCircle = styled.div(({ theme }) => css`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  border: 8px solid transparent;
  border-top: 8px solid ${theme.colors.accent.main};
  border-right: 8px solid ${theme.colors.accent.main};
  border-bottom: 8px solid ${theme.colors.accent.main};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
`);

const Spinner: React.FC = () => (
  <Wrapper>
    <SpinnerCircle />
  </Wrapper>
);

export default Spinner;