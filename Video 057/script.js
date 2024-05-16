// JS Loops

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "SK"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

for (const iterator of "Harry") {
    console.log(iterator)
}

let i = 5;

while (i < 6) {
    console.log(i)
    i++;
}

let t = 0;
do {
    console.log(t)
    t++;
} while (t < 0);