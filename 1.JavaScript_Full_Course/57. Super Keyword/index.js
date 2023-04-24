// inheritance = a child class can inherit all the
//               methods and properties from another class

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
  print() {
    console.log(`${this.name} ${this.age} ${this.runSpeed}`);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  print() {
    console.log(`${this.name} ${this.age} ${this.swimSpeed}`);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  print() {
    console.log(`${this.name} ${this.age} ${this.flySpeed}`);
  }
}

const rabbit = new Rabbit("Rabit", 1, 40);
const fish = new Fish("Fish", 2, 5);
const hawk = new Hawk("Hawk", 6, 2);

rabbit.print();
fish.print();
hawk.print();
