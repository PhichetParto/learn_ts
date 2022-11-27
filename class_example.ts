class Person {
    public constructor(private name:string) {
    }
  public getName(): string {
    return this.name;
  }
}

const person = new Person("jame");
console.log(person);
console.log(person.getName());

interface Shape {
    getArea: () => number;
}

class Rectanglel implements Shape {
    public constructor(protected readonly width:number, protected readonly height:number) {}
    public getArea(): number {
        return this.width * this.height;
    }
}

const rect:Rectanglel = new Rectanglel(50,10);
console.log(rect);
console.log(rect.getArea())

class Square extends Rectanglel {
    public constructor(width:number) {
        super(width, width);
    }
    public toString(): string {
        return   `Square [${this.getArea()}]`

    }
}
const sq = new Square(10);
console.log(sq);
console.log(sq.getArea());
console.log(sq.toString());

abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`
    }
}

class Rectanglel2 extends Polygon {
    public constructor(protected readonly width:number, protected readonly height:number) {
        super();
    }
    public getArea(): number {
        return this.width * this.height;
    }
}

const rect2:Rectanglel2 = new Rectanglel2(50,10);
console.log(rect2);
console.log(rect2.getArea())

