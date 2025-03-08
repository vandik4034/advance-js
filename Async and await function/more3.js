// Simulating the Payment Process
async function processPayment(cartAmount) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Payment of $${cartAmount} processed`);
        }, 2000);
    });

}

//  Shipping Address Process
async function shippingAddress(address) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Shipping to ${address} initiated`);
        }, 2000);
    });
}

//  Apply Coupon Process
async function applyCoupon(coupon) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (coupon === 'DISCOUNT10') {
                resolve('Coupon is valid');
            } else {
                reject('Coupon is invalid');
            }
        }, 2000);
    });
}


async function checkout(cartAmount, address, coupon) {
    try {

        let couponResult = await applyCoupon(coupon);
        console.log(couponResult);


        let paymentResult = await processPayment(cartAmount);
        console.log(paymentResult);


        let shippingResult = await shippingAddress(address);
        console.log(shippingResult);

        console.log("Checkout complete");

    } catch (error) {

        console.log('Checkout error: ', error);
    }
}


checkout(200, 'K.K Nagar, Botad', 'DISCOUNT10');



