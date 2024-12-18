function handleCompleteSyllables(type: string, s: any, content: any) {
  const elementsToAdd = getElementsToAdd(s.syllables);
  const response = [s.syllables[s.syllables.length - 1]];
  const options = addRandomElements(
    response,
    content.possibleOptions,
    elementsToAdd,
  );
  return {
    ...s,
    type,
    missSyllable: s.syllables[s.syllables.length - 1],
    possibilities: options,
  };
}

function getElementsToAdd(syllables: string[]) {
  return 3;
}

function getRandomElement(array: string[]): string {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function addRandomElements(
  syllables: string[],
  possibleOptions: string[],
  count: number,
): string[] {
  const uniqueOptions = possibleOptions.filter(
    (option) => !syllables.includes(option),
  );
  const newElements = [];

  for (let i = 0; i < count; i++) {
    const randomOption = getRandomElement(uniqueOptions);
    if (randomOption) {
      newElements.push(randomOption);
      uniqueOptions.splice(uniqueOptions.indexOf(randomOption), 1);
    }
  }

  return shuffleArray([...syllables, ...newElements]);
}

export { handleCompleteSyllables };
