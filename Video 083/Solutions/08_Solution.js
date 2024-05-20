// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function asyncArray(arr) {
    return arr.map(element => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(element * 2);
            }, 500);
        });
    });
}

let arr = [1, 2, 3, 4, 5, 6];

Promise.all(asyncArray(arr)).then(results => {
    console.log(results);
});
