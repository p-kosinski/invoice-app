import styled, { css, DefaultTheme } from 'styled-components';

const pulseKeyframes = `
  @keyframes pulse {
    from {
      opacity: 0.75;
    }

    to {
      opacity: 0.25;
    }
  }
`;

const pulseAnimation = `animation: pulse 0.5s linear infinite alternate;`;

const InvoiceTileSkeleton = styled.div(({ theme }) => css`
  width: 100%;
  height: 126px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px hsla(231, 38%, 45%, 0.1);
  background-color: ${theme.colors.backgrounds.skeleton};
  overflow: hidden;
  ${pulseAnimation}
  transition: background-color ${theme.transitionDuration} ease-in-out;

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    height: 80px;
  }

  ${pulseKeyframes}
`);

type SkeletonProps = {
  theme: DefaultTheme;
  $height?: string;
  $width?: string;
};

const CardSkeleton = styled.div<SkeletonProps>(
  ({ theme, $height, $width }) => css`
    height: ${$height};
    width: ${$width};
    margin-bottom: 16px;
    border-radius: 8px;
    box-shadow: 0px 10px 10px -10px hsla(231, 38%, 45%, 0.1);
    background-color: ${theme.colors.backgrounds.skeleton};
    overflow: hidden;
    ${pulseAnimation}
    transition: background-color ${theme.transitionDuration} ease-in-out;

    @media only screen and (min-width: ${theme.breakpoints.md}) {
      height: 80px;
    }

    ${pulseKeyframes}
  `
);

const TextSkeleton = styled.div<SkeletonProps>(
  ({ theme, $height, $width }) => css`
    height: ${$height};
    width: ${$width};
    background-color: ${theme.colors.backgrounds.skeleton};
    ${pulseAnimation}
    transition: background-color ${theme.transitionDuration} ease-in-out;

    ${pulseKeyframes}
  `
);

const Styled = {
  InvoiceTileSkeleton: InvoiceTileSkeleton,
  CardSkeleton: CardSkeleton,
  TextSkeleton: TextSkeleton,
};

export default Styled;