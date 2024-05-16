// JS Functions

function nice(name) {
    console.log("Hey " + name + "you are nice!")
}

nice("harry")

function sums(a, b) {
    // console.log (a + b)
    return a + b;
}

console.log("The sum of these numbers are", sums(3, 5));

function sums_optional(a, b, c = 3) {
    return a + b + c;
}

console.log("The sum of these numbers are", sums_optional(3, 5));
console.log("The sum of these numbers are", sums_optional(3, 5, 2));

const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(2)