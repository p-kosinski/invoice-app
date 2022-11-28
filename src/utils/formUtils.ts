import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import type {
  FormItemsArray,
  FormValuesState
} from '../redux/invoiceFormSlice';
import type { ItemsArray, Item, Invoice, Status } from '../redux/invoicesSlice';

const generateId = (): string => {
  const generateRandomString = (characters: string, length: number): string => {
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomCharacterIndex: number = Math.floor(
        Math.random() * characters.length
      );

      result += characters.charAt(randomCharacterIndex);
    }

    return result;
  };

  const generateRandomUppercaseLetters = (length: number): string => {
    return generateRandomString('ABCDEFGHIJKLMNOPQRSTUVWXYZ', length);
  };

  const generateRandomNumbers = (length: number): string => {
    return generateRandomString('1234567890', length);
  };

  const idLetters: string = generateRandomUppercaseLetters(2);
  const idNumbers: string = generateRandomNumbers(4);

  const newId = `${idLetters}${idNumbers}`;

  return newId;
};

const calculatePaymentDue = (
  issueDate: string,
  daysForPayment: number
): string => {
  return dayjs.utc(issueDate).add(daysForPayment, 'day').format('YYYY-MM-DD');
};

export interface ItemsData {
  itemsArray: ItemsArray;
  itemsTotal: number;
};

export const prepareItemsData = (formItems: FormItemsArray): ItemsData => {
  let itemsArray: ItemsArray = [];
  let itemsTotal = 0;

  for (let formItem of formItems) {
    const { name, quantity, price } = formItem;

    const parsedQuantity = parseInt(quantity);
    const parsedPrice = parseFloat(price);

    const itemData: Item = {
      name: name,
      quantity: parsedQuantity,
      price: parsedPrice,
      total: parsedQuantity * parsedPrice
    };

    itemsTotal += itemData.total;
    itemsArray.push(itemData);
  }

  const itemsData: ItemsData = {
    itemsArray: itemsArray,
    itemsTotal: itemsTotal
  };

  return itemsData;
};

export const prepareInvoiceDataObject = (
  status: Status,
  formValues: FormValuesState
): Invoice => {
  const {
    senderAddress,
    clientName,
    clientEmail,
    clientAddress,
    issueDate,
    paymentTerms,
    description,
    items
  } = formValues;

  const newId = generateId();
  const creationDate = dayjs.utc(issueDate).format('YYYY-MM-DD');
  const paymentDue = calculatePaymentDue(issueDate, paymentTerms);
  const { itemsArray, itemsTotal } = prepareItemsData(items);

  const invoiceDataObject: Invoice = {
    id: newId,
    createdAt: creationDate,
    paymentDue: paymentDue,
    description: description,
    paymentTerms: paymentTerms,
    clientName: clientName,
    clientEmail: clientEmail,
    status: status,
    senderAddress: senderAddress,
    clientAddress: clientAddress,
    items: itemsArray,
    total: itemsTotal
  };

  return invoiceDataObject;
};