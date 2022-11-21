import { useMemo } from 'react';

import { useAppSelector } from '../../../../../../hooks/reduxHooks';

import {
  selectItemQuantityByIndex,
  selectItemPriceByIndex
} from '../../../../../../redux/invoiceFormSlice';

import Typography from '../../../../../common/Typography/Typography';

type Props = {
  index: number;
};

const Total: React.FC<Props> = ({ index }) => {
  const itemQuantity: string = useAppSelector((state) => 
    selectItemQuantityByIndex(state, index)
  );
  const itemPrice: string = useAppSelector((state) => 
    selectItemPriceByIndex(state, index)
  );
  
  const itemTotal = useMemo(() => {
    if(!itemQuantity.length || !itemPrice.length) {
      return '0.00';
    } else {
      const parsedQuantity = parseInt(itemQuantity);
      const parsedPrice = parseFloat(itemPrice);

      const total = (parsedQuantity * parsedPrice).toFixed(2);

      return total;
    }
  }, [itemQuantity, itemPrice]);

  return (
    <>
      <Typography variant='body1' element='p'>
        Total
      </Typography>
      <Typography variant='h4' element='p'>
        {itemTotal}
      </Typography>
    </>
  );
};

export default Total;