export const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

export const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};