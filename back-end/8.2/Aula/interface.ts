interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    const sum = myParam + this.myNumber;

    return `Pitty véia teria ${sum} anos atualmente.`
  }
}

const myObject = new MyClass(15)
console.log(myObject.myNumber);
console.log(myObject.myFunc(2));