//Arrow Function :

const adunare = (a,b) => a + b;
const scadere = (a,b) => a - b;
const inmultire = (a,b) => a * b;
const impartire = (a,b) => a / b;

const calcul_1 = (a,b) => a + b + a;
const calcul_2 = (a,b) => a - b - a;

const calcul_3 = (a,b) => a * a * b;
const calcul_4 = (a,b) => b / a / b;

const calcul_5 = (a,b) => a + b - a;
const calcul_6 = (a,b) => a - b + a;

const calcul_7 = (a,b) => a / b - a;
const calcul_8 = (a,b) => a * b + a;

const calcul_9 = (a,b) => a / b + a;
const calcul_10 = (a,b) => a * b - a;

//High Order Function :
const number = (a, b, func) => func(a,b);

const totalNumber = number(60 , 37, calcul_7);

console.log(totalNumber);