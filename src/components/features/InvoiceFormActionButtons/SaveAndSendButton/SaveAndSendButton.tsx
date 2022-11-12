import Button from '../../../common/Button/Button';

const SaveAndSendButton: React.FC = () => (
  <Button
    variant='primary'
    onClick={() => console.log(`'Save & Send' button was clicked`)}
  >
    Save & Send
  </Button>
);
    
export default SaveAndSendButton;