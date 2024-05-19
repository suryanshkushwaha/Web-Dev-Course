function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

console.log('Loading modules');

console.log('Do something else');

console.log('Load data');
let data = getData();
console.log(data);

// data.then(() => {
//     console.log('Process data');    // i want to process data only after it's loaded right? 
//     console.log('task 2');
// })

async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main() {
    console.log('Loading modules');

    console.log('Do something else');

    console.log('Load data');
    let data = await getData2();
    console.log(data);

    console.log('Process data');    // i want to process data only after it's loaded right? 
    console.log('task 2');
}

main()
