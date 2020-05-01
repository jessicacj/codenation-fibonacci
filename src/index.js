'use strict'

const fibonacci = () => {
    const arrFibonacci = [0, 1]
    while (arrFibonacci [arrFibonacci.length -1] <= 350) {
        const  nextNum = 
        arrFibonacci[arrFibonacci.length -1] + 
        arrFibonacci[arrFibonacci.length -2];
        arrFibonacci.push(nextNum);
    }
    return arrFibonacci;

};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}