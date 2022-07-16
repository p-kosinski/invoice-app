import styled from 'styled-components';

const ThemeToggleButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  height: fit-content;
  width: fit-content;
  display: grid;
  background-color: transparent;
  cursor: pointer;

  svg {
    place-self: center;
  }
`;

const Styled = {
  ThemeToggleButton: ThemeToggleButton,
};

export default Styled;