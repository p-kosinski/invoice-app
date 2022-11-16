import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import type { FormItemsArray } from '../redux/invoiceFormSlice';
import type { ItemsArray, Item } from '../redux/invoicesSlice';

export const generateId = (): string => {
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

export const calculatePaymentDue = (
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