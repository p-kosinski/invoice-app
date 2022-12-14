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
        <>
          <Styled.InvoiceTileSkeleton />
        </>
      );
    case 'card':
      return (
        <>
          <Styled.CardSkeleton $height={height} $width={width} />
        </>
      );
    case 'text':
      return (
        <>
          <Styled.TextSkeleton $height={height} $width={width} />
        </>
      );
    default:
      console.error(`Invalid 'variant' prop`);

      return (
        <></>
      );
  }
};

export default Skeleton;