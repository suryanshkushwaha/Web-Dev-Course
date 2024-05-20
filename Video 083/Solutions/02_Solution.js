// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 2, 3, 4, 4, 5, 6, 7]

function doubleTrouble(arr) {
    let result = []
    for (let index = 0; index < arr.length - 1; index++) {
        const elem = arr[index];
        if (elem === arr[index + 1]) {
            index++
            result.push(elem)
        }
        result.push(elem * 2)
    }
    return result
}

doubleTrouble(arr)