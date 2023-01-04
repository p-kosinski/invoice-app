import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import type {
  FormItem,
  FormItemsArray,
  FormValuesState
} from '../redux/invoiceFormSlice';
import type {
  ItemsArray,
  Item,
  Invoice,
  Status,
  Address,
  ChangedInvoiceData
} from '../redux/invoicesSlice';

const generateId = (): string => {
  const generateRandomString = (
    characters: string,
    length: number
  ): string => {
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

export const prepareChangedInvoiceDataObject = (
  status: Status,
  formValues: FormValuesState
): ChangedInvoiceData => {
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

  const paymentDue = calculatePaymentDue(issueDate, paymentTerms);
  const { itemsArray, itemsTotal } = prepareItemsData(items);

  const changedInvoiceData: ChangedInvoiceData = {
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

  return changedInvoiceData;
};

export const parseInvoiceDataToFormValues = (
  invoiceData: Invoice
): FormValuesState => {
  const parseDateToUTCISOString = (date: string): string => {
    return dayjs.utc(date).toISOString();
  };

  const parseInvoiceItemsToFormItems = (
    invoiceItems: ItemsArray
  ): FormItemsArray => {
    let parsedItemsArray: FormItemsArray = [];

    for (let item of invoiceItems) {
      const parsedItemData: FormItem = {
        name: item.name,
        quantity: item.quantity.toString(),
        price: item.price.toFixed(2),
      };

      parsedItemsArray.push(parsedItemData);
    }

    return parsedItemsArray;
  };

  const parsedDataObject: FormValuesState = {
    senderAddress: invoiceData.senderAddress,
    clientName: invoiceData.clientName,
    clientEmail: invoiceData.clientEmail,
    clientAddress: invoiceData.clientAddress,
    issueDate: parseDateToUTCISOString(invoiceData.createdAt),
    paymentTerms: invoiceData.paymentTerms,
    description: invoiceData.description,
    items: parseInvoiceItemsToFormItems(invoiceData.items),
  };

  return parsedDataObject;
};