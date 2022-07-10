type Props = {
  newInvoice?: boolean;
};

const InvoiceEdit: React.FC<Props> = ({ newInvoice }) => {
  if (newInvoice) {
    return (
      <div style={{position: 'fixed'}}>
        <h2>New Invoice View</h2>
      </div>
    );
  } else {
    return (
      <div style={{position: 'fixed'}}>
        <h2>Edit Invoice 123 View</h2>
      </div>
    );
  }
};

export default InvoiceEdit;