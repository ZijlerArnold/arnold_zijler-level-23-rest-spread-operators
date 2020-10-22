let log = console.log;
//===================

log(`===== Opdracht : Rest and spread Operator =====`);
log(``);

log(`===== Functie 1: Rest Operator =====`);
const optellen = (...arg) => {
    return arg.reduce((tel, num) =>tel + num);
}
log(`Outcome: ${optellen(2, 5, 9, 4, 3, 90)}`);
log(``);



log(`===== Functie 2: Spread Operator =====`);
const optellen2 = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

const numbers = [1, 4, 90];

log(`Outcome: ${optellen2(...numbers)}`);
log(``);

