function handleFingerContable(type: string, s: any, content: any) {
    const operation = getRandomElement(s.operations)
    const firstNumber = getRandomNumber(s.minNumber, s.maxNumber)
    const secondNumber = getRandomNumber(s.minNumber, s.maxNumber)
    const response = operation === "+"
        ? firstNumber + secondNumber
        : firstNumber - secondNumber
    const options = generateOptions(response, 5, 4)

    return {
      firstNumber,
      secondNumber,
      response,
      operation,
      options,
      type      
    }
}

function generateOptions(correctNumber: number, range: number, numOptions = 4) {
    const options = new Set();
    options.add(correctNumber);
  
    while (options.size < numOptions) {
      const randomOption = Math.floor(Math.random() * range) + 1;
      options.add(randomOption);
    }
  
    return Array.from(options);
  }

function getRandomElement(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export {
    handleFingerContable
}