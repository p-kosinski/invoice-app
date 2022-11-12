import Button from '../../../common/Button/Button';

const DiscardButton: React.FC = () => (
  <Button
    variant='discard'
    onClick={() => console.log(`'discard' button was clicked`)}
  >
    Discard
  </Button>
);

export default DiscardButton;