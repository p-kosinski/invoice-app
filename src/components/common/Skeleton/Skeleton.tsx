import AnimateMount from '../AnimateMount/AnimateMount';

import Styled from './Styled';

type Props = {
  variant: 'invoiceTile' | 'card' | 'text';
  height?: string;
  width?: string;
};

const Skeleton: React.FC<Props> = ({ variant, height, width }) => {
  switch(variant) {
    case 'invoiceTile':
      return (
        <AnimateMount variant='fade'>
          <Styled.InvoiceTileSkeleton />
        </AnimateMount>
      );
    case 'card':
      return (
        <AnimateMount variant='fade'>
          <Styled.CardSkeleton $height={height} $width={width} />
        </AnimateMount>
      );
    case 'text':
      return (
        <AnimateMount variant='fade'>
          <Styled.TextSkeleton $height={height} $width={width} />
        </AnimateMount>
      );
    default:
      console.error(`Invalid 'variant' prop`);

      return (
        <></>
      );
  }
};

export default Skeleton;