// let obj = {
//     a: 1,
//     b: "Suryansh"
// }

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

class Animal {
    constructor(name) {
        this.name = name;
        console.log('Object is created');
    }

    eats() {
        console.log('I am eating');
    }

    jumps() {
        console.log('I am jumping');
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log('Lion object created');

    }
    roars() {
        console.log('I ROAR');

    }

    // method overriding
    eats() {
        // super.eats()  // can also use super here if needed 
        console.log('Lion is eating!');

    }
}

console.log(a = new Animal("Bunny"));
console.log(r = new Lion("Shera"));

// r instanceof Lion - true
// r instanceof Animal - true

// a instanceof Lion - false