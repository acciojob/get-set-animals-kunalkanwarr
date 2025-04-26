// // Animal.ts
// class Animal {
//   private _species: string;

//   constructor(species: string) {
//     this._species = species;
//   }

//   get species(): string {
//     return this._species;
//   }

//   makeSound(): void {
//     console.log(`The ${this._species} makes a sound`);
//   }
// }

// // Cat.ts
// class Cat extends Animal {
//   constructor(species: string) {
//     super(species);
//   }

//   purr(): void {
//     console.log("purr");
//   }
// }

// // Dog.ts
// class Dog extends Animal {
//   constructor(species: string) {
//     super(species);
//   }

//   bark(): void {
//     console.log("woof");
//   }
// }

// // Example usage (this part is optional for testing)
// const myCat = new Cat("Siamese");
// myCat.makeSound(); // The Siamese makes a sound
// myCat.purr();      // purr

// const myDog = new Dog("Golden Retriever");
// myDog.makeSound(); // The Golden Retriever makes a sound
// myDog.bark();      // woof
