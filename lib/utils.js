export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const swap = Math.floor(Math.random() * (i + 1));
        [array[i], array[swap]] = [array[swap], array[i]];
    }
    return array;
};