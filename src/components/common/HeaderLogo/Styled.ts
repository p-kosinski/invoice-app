import styled from 'styled-components';

const HeaderLogo = styled.div`
  width: 72px;
  height: 72px;
  background-color: ${props => props.theme.colors.accent.main};
  border-radius: 0 20px 20px 0;
  display: grid;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.accent.light};
    border-radius: 20px 0 0 0;
    z-index: 1;
  }

  img {
    place-self: center;
    z-index: 2;

    @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 40px;
      height: 37.71px;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 103px;
    height: 103px;
  }
`;

const Styled = {
  HeaderLogo: HeaderLogo,
};

export default Styled;