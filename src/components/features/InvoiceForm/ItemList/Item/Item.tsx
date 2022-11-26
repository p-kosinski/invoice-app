import NameField from './NameField/NameField';
import QuantityField from './QuantityField/QuantityField';
import PriceField from './PriceField/PriceField';
import Total from './Total/Total';
import DeleteButton from './DeleteButton/DeleteButton';

import Styled from './Styled';

type Props = {
  index: number;
};

const Item: React.FC<Props> = ({ index }) => (
  <li>
    <Styled.ItemForm>
      <Styled.ItemNameWrapper>
        <NameField index={index} />
      </Styled.ItemNameWrapper>
      <Styled.ItemQuantityWrapper>
        <QuantityField index={index} />
      </Styled.ItemQuantityWrapper>
      <Styled.ItemPriceWrapper>
        <PriceField index={index} />
      </Styled.ItemPriceWrapper>
      <Styled.ItemTotalWrapper>
        <Total index={index} />
      </Styled.ItemTotalWrapper>
      <Styled.ItemDeleteWrapper>
        <DeleteButton index={index} />
      </Styled.ItemDeleteWrapper>
    </Styled.ItemForm>
  </li>
);

export default Item;