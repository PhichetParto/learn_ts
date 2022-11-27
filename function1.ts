function getTime() {
    return new Date().getTime();
}
console.log(getTime());

function printHello(): void {
    console.log("Hello");
}
printHello();

function mutiply(a: number, b:number):number {
    return a * b;
}

console.log(mutiply(1,2));

function add(a:number, b:number, c?:number):number {
    return a + b + (c || 0);
}

console.log(add(1,2,3));
console.log(add(1,2));

function pow(value: number, exponent: number = 10):number {
    return value ** exponent;
}
console.log(pow(10));
console.log(pow(10,2));

function divide({ dividend, divisor}: {dividend:number, divisor:number}) {
    return dividend/divisor;
}
console.log(divide({dividend:100,divisor:10}));

function add2(a:number,b:number, ...rest:number[]){
    return a + b + rest.reduce((p,c) => p+c,0);
}
console.log(add2(1,2,3,4,5));

type Negate = (value: number) => number;

const negateFunction: Negate = (value:number) => value * -1;
const negateFunction2: Negate = function(value:number):number {return value*-1};
console.log(negateFunction(1))
console.log(negateFunction2(1))