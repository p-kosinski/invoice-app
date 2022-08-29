import styled, { css } from 'styled-components';

const MonthPicker = styled.div(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.formElements.text};
  transition: color ${theme.transitionDuration} ease-in-out;
`);

const MonthPickerButton = styled.button(({ theme }) => css`
  border: none;
  padding: 12px;
  margin: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform ${theme.transitionDuration} ease-in-out;

  @media (hover: hover) and (pointer: pointer) {
    &:hover {
      transform: scale(1.5);
    }
  }
`);

const Styled = {
  MonthPicker: MonthPicker,
  MonthPickerButton: MonthPickerButton
};

export default Styled;