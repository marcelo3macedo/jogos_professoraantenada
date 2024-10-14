function handleCreateWord(type: string, s: any, content: any) {
    const elementsToAdd = getElementsToAdd(s.syllables);
    const options = addRandomElements(s.syllables, content.possibleOptions, elementsToAdd);
    return {
      ...s,
      type,
      possibilities: options
    }
}

function getElementsToAdd(syllables: string[]) {
    switch (syllables.length) {
        case 1: return 3;
        case 2: return 2;
        case 3: return 3;
        case 4: return 2;
        default: return 2;
    }
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

function addRandomElements(syllables: string[], possibleOptions: string[], count: number): string[] {
    const uniqueOptions = possibleOptions.filter(option => !syllables.includes(option));
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

export {
    handleCreateWord
}