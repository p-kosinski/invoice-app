import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { parseDateToLocaleString } from '../../../utils/dateUtils';

import { selectDrawerOpen, setDrawerOpen } from '../../../redux/invoicesViewSlice';
import { selectThemeMode } from '../../../redux/themeSlice';
import type { ThemeMode } from '../../../redux/themeSlice';

import Drawer from '../../layout/Drawer/Drawer';
import Container from '../../layout/Container/Container';
import GoBackButton from '../../common/GoBackButton/GoBackButton';
import Typography from '../../common/Typography/Typography';
import TextField from '../../common/TextField/TextField';
import DatePicker from '../../common/DatePicker/DatePicker';
import Select from '../../common/Select/Select';
import Button from '../../common/Button/Button';

import { ReactComponent as DeleteIcon } from '../../../assets/icon-delete.svg';

import Styled from './Styled';

const NewInvoice: React.FC = () => {
  const dispatch = useAppDispatch();

  const drawerOpen: boolean = useAppSelector(selectDrawerOpen);

  const themeMode: ThemeMode = useAppSelector(selectThemeMode);

  const closeDrawer = () => {
    dispatch(setDrawerOpen(false))
  };

  const [senderStreetAddress, setSenderStreetAddress] = useState('');
  const [senderCity, setSenderCity] = useState('');
  const [senderPostCode, setSenderPostCode] = useState('');
  const [senderCountry, setSenderCountry] = useState('');

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientStreetAddress, setClientStreetAddress] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientPostCode, setClientPostCode] = useState('');
  const [clientCountry, setClientCountry] = useState('');

  const [date, setDate] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [description, setDescription] = useState('');

  const [item1Name, setItem1Name] = useState(''); 
  const [item1Quantity, setItem1Quantity] = useState('1');
  const [item1Price, setItem1Price] = useState('156.00');

  const [item2Name, setItem2Name] = useState(''); 
  const [item2Quantity, setItem2Quantity] = useState('2');
  const [item2Price, setItem2Price] = useState('200.00');

  useEffect(() => {
    setDate(parseDateToLocaleString(dayjs.utc()));
  }, []);

  return (
    <Drawer open={drawerOpen}>
      <Styled.Section>
        <Container>
          <GoBackButton
            showOnMobileOnly
            noInlinePadding
            onClick={() => closeDrawer()}
          />
          <Styled.HeadingWrapper>
            <Styled.Heading>
              New Invoice
            </Styled.Heading>
          </Styled.HeadingWrapper>
          <form>
            <Styled.BillFromFieldset>
              <Styled.Legend>
                <Typography variant='h4' element='span'>
                  Bill From
                </Typography>
              </Styled.Legend>
              <Styled.StreetAddressWrapper>
                <TextField
                  input='text'
                  name='sender-street-address'
                  label='Street Address'
                  value={senderStreetAddress}
                  onChange={setSenderStreetAddress}
                  errorMsg={`can't be empty`}
                />
              </Styled.StreetAddressWrapper>
              <Styled.CityWrapper>
                <TextField
                  input='text'
                  name='sender-city'
                  label='City'
                  value={senderCity}
                  onChange={setSenderCity}
                />
              </Styled.CityWrapper>
              <Styled.PostCodeWrapper>
                <TextField
                  input='text'
                  name='sender-post-code'
                  label='Post Code'
                  value={senderPostCode}
                  onChange={setSenderPostCode}
                />
              </Styled.PostCodeWrapper>
              <Styled.CountryWrapper>
                <TextField
                  input='text'
                  name='sender-country'
                  label='Country'
                  value={senderCountry}
                  onChange={setSenderCountry}
                />
              </Styled.CountryWrapper>
            </Styled.BillFromFieldset>
            <Styled.BillToFieldset>
              <Styled.Legend>
                <Typography variant='h4' element='span'>
                  Bill To
                </Typography>
              </Styled.Legend>
              <Styled.NameWrapper>
                <TextField
                  input='text'
                  name='client-name'
                  label={`Client's Name`}
                  value={clientName}
                  onChange={setClientName}
                  errorMsg={`can't be empty`}
                />
              </Styled.NameWrapper>
              <Styled.EmailWrapper>
                <TextField
                  input='text'
                  name='client-email'
                  label={`Client's Email`}
                  value={clientEmail}
                  onChange={setClientEmail}
                  errorMsg={`can't be empty`}
                />
              </Styled.EmailWrapper>
              <Styled.StreetAddressWrapper>
                <TextField
                  input='text'
                  name='client-street-address'
                  label='Street Address'
                  value={clientStreetAddress}
                  onChange={setClientStreetAddress}
                  errorMsg={`can't be empty`}
                />
              </Styled.StreetAddressWrapper>
              <Styled.CityWrapper>
                <TextField
                  input='text'
                  name='client-city'
                  label='City'
                  value={clientCity}
                  onChange={setClientCity}
                />
              </Styled.CityWrapper>
              <Styled.PostCodeWrapper>
                <TextField
                  input='text'
                  name='client-post-code'
                  label='Post Code'
                  value={clientPostCode}
                  onChange={setClientPostCode}
                />
              </Styled.PostCodeWrapper>
              <Styled.CountryWrapper>
                <TextField
                  input='text'
                  name='client-country'
                  label='Country'
                  value={clientCountry}
                  onChange={setClientCountry}
                />
              </Styled.CountryWrapper>
            </Styled.BillToFieldset>
            <Styled.DetailsFieldset>
              <Styled.DateWrapper>
                <DatePicker
                  name='invoice-date'
                  label='Invoice Date'
                  selectedDate={date}
                  onChange={setDate}
                />
              </Styled.DateWrapper>
              <Styled.PaymentTermsWrapper>
                <Select
                  name='payment-terms'
                  label='Payment Terms'
                  options={[
                    {value: '1d', label: 'Net 1 Day'},
                    {value: '7d', label: 'Net 7 Days'},
                    {value: '14d', label: 'Net 14 Days'},
                    {value: '30d', label: 'Net 30 Days'}
                  ]}
                  defaultOptionValue='30d'
                  onChange={setPaymentTerms}
                />
              </Styled.PaymentTermsWrapper>
              <Styled.DescriptionWrapper>
                <TextField
                  input='text'
                  name='description'
                  label='Project Description'
                  value={description}
                  onChange={setDescription}
                  errorMsg={`can't be empty`}
                  placeholder='e.g. Graphic Design Service'
                />
              </Styled.DescriptionWrapper>
            </Styled.DetailsFieldset>
          </form>
          <Styled.ItemListWrapper>
            <Typography variant='h5'>Item List</Typography>
            <Styled.ItemListTableHeadings>
              <Styled.ItemNameWrapper>
                <Typography variant='body1' element='p'>
                  Item Name
                </Typography>
              </Styled.ItemNameWrapper>
              <Styled.ItemQuantityWrapper>
                <Typography variant='body1' element='p'>
                  Qty.
                </Typography>
              </Styled.ItemQuantityWrapper>
              <Styled.ItemPriceWrapper>
                <Typography variant='body1' element='p'>
                  Price
                </Typography>
              </Styled.ItemPriceWrapper>
              <Styled.ItemTotalWrapper $showLabel>
                <Typography variant='body1' element='p'>
                  Total
                </Typography>
              </Styled.ItemTotalWrapper>
              <Styled.ItemDeleteWrapper>
                <Styled.DeleteButtonPlaceholder />
              </Styled.ItemDeleteWrapper>
            </Styled.ItemListTableHeadings>
            <Styled.ItemList>
              <li>
                <Styled.ItemForm>
                  <Styled.ItemNameWrapper>
                    <TextField
                      input='text'
                      name='item-1-name'
                      label='Item Name'
                      value={item1Name}
                      onChange={setItem1Name}
                      errorMsg={`can't be empty`}
                      showLabelOnlyOnMobile
                    />
                  </Styled.ItemNameWrapper>
                  <Styled.ItemQuantityWrapper>
                    <TextField
                      input='numeric'
                      name='item-1-quantity'
                      label='Qty.'
                      value={item1Quantity}
                      onChange={setItem1Quantity}
                      showLabelOnlyOnMobile
                    />
                  </Styled.ItemQuantityWrapper>
                  <Styled.ItemPriceWrapper>
                    <TextField
                      input='decimal'
                      name='item-1-price'
                      label='Price'
                      value={item1Price}
                      onChange={setItem1Price}
                      showLabelOnlyOnMobile
                    />
                  </Styled.ItemPriceWrapper>
                  <Styled.ItemTotalWrapper>
                    <Typography variant='body1' element='p'>
                      Total
                    </Typography>
                    <Typography variant='h4' element='p'>
                      156.00
                    </Typography>
                  </Styled.ItemTotalWrapper>
                  <Styled.ItemDeleteWrapper>
                    <Styled.DeleteButton>
                      <DeleteIcon />
                    </Styled.DeleteButton>
                  </Styled.ItemDeleteWrapper>
                </Styled.ItemForm>
              </li>
              <li>
                <Styled.ItemForm>
                  <Styled.ItemNameWrapper>
                    <TextField
                      input='text'
                      name='item-2-name'
                      label='Item Name'
                      value={item2Name}
                      onChange={setItem2Name}
                      errorMsg={`can't be empty`}
                      showLabelOnlyOnMobile
                    />
                  </Styled.ItemNameWrapper>
                  <Styled.ItemQuantityWrapper>
                    <TextField
                      input='numeric'
                      name='item-2-quantity'
                      label='Qty.'
                      value={item2Quantity}
                      onChange={setItem2Quantity}
                      showLabelOnlyOnMobile
                    />
                  </Styled.ItemQuantityWrapper>
                  <Styled.ItemPriceWrapper>
                    <TextField
                      input='decimal'
                      name='item-2-price'
                      label='Price'
                      value={item2Price}
                      onChange={setItem2Price}
                      showLabelOnlyOnMobile
                    />
                  </Styled.ItemPriceWrapper>
                  <Styled.ItemTotalWrapper>
                    <Typography variant='body1' element='p'>
                      Total
                    </Typography>
                    <Typography variant='h4' element='p'>
                      400.00
                    </Typography>
                  </Styled.ItemTotalWrapper>
                  <Styled.ItemDeleteWrapper>
                    <Styled.DeleteButton>
                      <DeleteIcon />
                    </Styled.DeleteButton>
                  </Styled.ItemDeleteWrapper>
                </Styled.ItemForm>
              </li>
              <Styled.AddItemButtonWrapper>
                <Button
                  variant='add'
                  ariaLabel='add new item'
                  onClick={() => console.log('`Add New Item` was clicked')}
                >
                  Add New Item
                </Button>
              </Styled.AddItemButtonWrapper>
            </Styled.ItemList>
          </Styled.ItemListWrapper>
          <Styled.ErrorMessages>
            <Typography variant='errorMsg'>
              - All fields must be added
            </Typography>
            <Typography variant='errorMsg'>
              - An item must be added
            </Typography>
          </Styled.ErrorMessages>
        </Container>
      </Styled.Section>
      <Styled.Toolbar $showShadow={themeMode === 'light'}>
        <Container>
          <Styled.ToolbarWrapper>
            <Button
              variant='discard'
              onClick={() => console.log(`'discard' button was clicked`)}
            >
              Discard
            </Button>
            <Button
              variant='draft'
              showOnMobile
              onClick={() => console.log(`'Save as Draft' button was clicked`)}
            >
              Save as Draft
            </Button>
            <Styled.SaveButtonsWrapper>
              <Button
                variant='draft'
                hideOnMobile
                onClick={() => console.log(`'Save as Draft' button was clicked`)}
              >
                Save as Draft
              </Button>
              <Button
                variant='primary'
                onClick={() => console.log(`'Save & Send' button was clicked`)}
              >
                Save & Send
              </Button>
            </Styled.SaveButtonsWrapper>
          </Styled.ToolbarWrapper>
        </Container>
      </Styled.Toolbar>
    </Drawer>
  );
};

export default NewInvoice;