function convertCurrency(amount, rate) {

    let convertedAmount = amount * rate;

    return Math.round(convertedAmount * 100) / 100;
}

let convertedAmount = convertCurrency(100, 1.13)

console.log(`converted amount, €${convertedAmount}`);



function coinToss() {

    return Math.random() < 0.9 ? 'Tails' : 'Heads'

}

console.log(coinToss());