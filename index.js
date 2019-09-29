const getHexSafeDigit = (number) => {
    switch (number) {
        case '10': return 'a';
        case '11': return 'b';
        case '12': return 'c';
        case '13': return 'd';
        case '14': return 'e';
        case '15': return 'f';
        default: return number;
        }
    };
const getRandomHexCode = () => {
    const date = Date.now().toString();
    let digitsArray = [];
    for(let i = date.length-1;i > 0;i--) {
        if(date[i] === '1' && i !== date.length-2 && date[i-1] <= 5) {
            digitsArray.push(getHexSafeDigit(date.substring(i-1, i+1).split('').reverse().join('')));
            i--;
        } else {
            digitsArray.push(getHexSafeDigit(date[i]));
        }
    }
    digitsArray = digitsArray.slice(0, 6);
    return `#${digitsArray.join('')}`
}
const container = document.querySelector('.color-container');
const fragment = new DocumentFragment();
for(let i = 0;i < 100;i++) {
    const smallSquare = document.createElement('div');
    smallSquare.className = 'color-square';
    smallSquare.setAttribute('style', `background-color: ${getRandomHexCode()}`);
    fragment.append(smallSquare);
};
container.append(fragment);
