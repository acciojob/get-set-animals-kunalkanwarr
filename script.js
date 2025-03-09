class Animal {
  constructor(private _species: string) {}

  get species(): string {
    return this._species;
  }

  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species: string) {
    super(species);
  }

  purr(): void {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  bark(): void {
    console.log("woof");
  }
}

// Example Usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected Output: The Siamese makes a sound
myCat.purr(); // Expected Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
myDog.bark(); // Expected Output: woof
