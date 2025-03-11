// class Animal {
//   constructor(private _species: string) {}
// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }
  
  get species() {
    return this._species;
  }
  
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class
class Cat extends Animal {
  constructor(species) {
    super(species);
  }
  
  purr() {
    console.log("purr");
  }
}

// Dog class
class Dog extends Animal {
  constructor(species) {
    super(species);
  }
  
  bark() {
    console.log("woof");
  }
}

// Example usage in HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("createCat").addEventListener("click", () => {
    const cat = new Cat("Siamese");
    document.getElementById("output").innerText = `The ${cat.species} makes a sound`;
    console.log("purr");
  });

  document.getElementById("createDog").addEventListener("click", () => {
    const dog = new Dog("Golden Retriever");
    document.getElementById("output").innerText = `The ${dog.species} makes a sound`;
    console.log("woof");
  });
});

//   get species(): string {
//     return this._species;
//   }

//   makeSound(): void {
//     console.log(`The ${this._species} makes a sound`);
//   }
// }

// class Cat extends Animal {
//   constructor(species: string) {
//     super(species);
//   }

//   purr(): void {
//     console.log("purr");
//   }
// }

// class Dog extends Animal {
//   constructor(species: string) {
//     super(species);
//   }

//   bark(): void {
//     console.log("woof");
//   }
// }

// // Example Usage
// const myCat = new Cat("Siamese");
// myCat.makeSound(); // Expected Output: The Siamese makes a sound
// myCat.purr(); // Expected Output: purr

// const myDog = new Dog("Golden Retriever");
// myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
// myDog.bark(); // Expected Output: woof
