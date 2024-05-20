// The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder(order) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 10000;
        
        setTimeout(() => {
            resolve(`Order for ${order} confirmed!`);
        }, delay);
    });
}

placeOrder('item123').then(message => console.log(message));
