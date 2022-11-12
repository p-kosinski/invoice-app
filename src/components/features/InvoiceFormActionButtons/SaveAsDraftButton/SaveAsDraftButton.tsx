import Button from '../../../common/Button/Button';

type Props = {
  showOnMobile?: boolean;
  hideOnMobile?: boolean;
};

const SaveAsDraftButton: React.FC<Props> = ({
  showOnMobile,
  hideOnMobile
}) => (
  <Button
    variant='draft'
    showOnMobile={showOnMobile}
    hideOnMobile={hideOnMobile}
    onClick={() => console.log(`'Save as Draft' button was clicked`)}
  >
    Save as Draft
  </Button>
);
  
export default SaveAsDraftButton;