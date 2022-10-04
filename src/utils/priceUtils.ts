export const parsePriceToGBP = (price: number): string => {
  const addWhitespaceAfterCurrency = (priceString: string): string => {
    const charArray = priceString.split('');

    return [charArray[0], charArray.slice(1).join('')].join(' ');
  };

  const parsedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'GBP'});

  return addWhitespaceAfterCurrency(parsedPrice);
};