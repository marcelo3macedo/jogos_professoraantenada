function handleIdentifyImage(type: string, s: any, content: any) {
    const { word, slug } = s || {}
    const options = generateOptions(content.elements, word, 4)
    
    return {
        type,
        word,
        slug,
        options: options.map(x => x.word)
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function generateOptions(words: any, correctWord: string, count: number) {
    const correctWordObj = words.find((word: any) => word.word.toLowerCase() === correctWord.toLowerCase());
    if (!correctWordObj) {
        throw new Error('Correct word not found in the list');
    }

    const options = [correctWordObj];

    const shuffledWords = words.sort(() => 0.5 - Math.random());

    while (options.length < count) {
        const randomWord = shuffledWords[getRandomInt(shuffledWords.length)];
        if (!options.some(option => option.word === randomWord.word)) {
            options.push(randomWord);
        }
    }

    options.sort(() => 0.5 - Math.random());

    return options;
}

export {
    handleIdentifyImage
}