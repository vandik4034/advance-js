// function getData(dataId) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             console.log("data", dataId);

//             resolve("success");

//         }, 3000);
//     });
// }

// async function getAllData() {

//     console.log("getting data 1 ...");

//     await getData(1);
//     console.log("getting data 2 ...");

//     await getData(2);
//     console.log("getting data 3 ...");

//     await getData(3);
//     console.log("getting data 4.....");

//     await getData(4);
//     console.log("getting data 5....");

//     await getData(5);
//     console.log("getting data 6....");

//     await getData(6);

// }

// getAllData();




/// exaple 2 

function getCheese(callback) {

    return new Promise((resolve, reject) => {

        let cheese = "🧀"

        setTimeout(() => {

            resolve(cheese)

            console.log("get your cheese", cheese)

        }, 2000)

    })

}


function makeDough(cheese, callback) {

    return new Promise((resolve, reject) => {

        let dough = cheese + "🍞"

        setTimeout(() => {

            resolve(dough);

            console.log("here is your dough" + dough)

        }, 2000)

    })

}

function makePizza(dough, callback) {

    return new Promise((resolve, reject) => {

        let pizza = dough + "🍕"

        setTimeout(() => {

            resolve(pizza);

            console.log("here is your pizza" + pizza)

        }, 2000)

    })

}


async function preparePizza() {

    try {
        let cheese = await getCheese();

        let dough = await makeDough(cheese);

        let pizza = await makePizza(dough);

        console.log("Pizza is ready: " + pizza);

    } catch (error) {

        console.log("Error:", error);

    }
}

preparePizza();




