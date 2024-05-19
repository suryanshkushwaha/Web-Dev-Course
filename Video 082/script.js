async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45)
    }, 1000);
  })
}

(async function main() {
  let a = await sleep()
  let v = await sleep()

  let [x, y] = [1, 5, 8]
  console.log(x, y);

  let [p, q, ...rest] = [1, 5, 7, 8, 9, 10]
  console.log(p, q, rest);

  let obj = {
    z: 1,
    w: 2,
    c: 4
  }

  let { z, w } = obj
  console.log(z, w);

  let arr = [1, 4, 6]
  console.log(sum(arr[0], arr[1], arr[2]))
  console.log(sum(...arr))
})()

function sum(a, b, c) {
  return a + b + c;
}
