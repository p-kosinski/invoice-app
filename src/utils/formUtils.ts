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
