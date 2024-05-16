// Faulty calculator perfoms wrong calculations 10% of the times

const faulty_calc = (a, b, symbol) => {
    let prob = Math.random();

    if (prob <= 0.1) {
        switch (symbol) {
            case '+':
                return a - b;

            case '*':
                return a + b;

            case '-':
                return a / b;

            case '/':
                return a ** b;

            default:
                break;
        }
    } else {
        switch (symbol) {
            case '+':
                return a + b;

            case '*':
                return a * b;

            case '-':
                return a - b;

            case '/':
                return a / b;

            default:
                break;
        }
    }
}

console.log(faulty_calc(5, 6, '-'))