let x: unknown = "hello";
let num: string = "1";
console.log((x as string).length)
console.log((<string>x).length)
console.log(((num as unknown) as number).toFixed(2))