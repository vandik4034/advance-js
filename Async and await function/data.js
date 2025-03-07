function fetchData() {

    return new Promise((resolve) => {


        setTimeout (() => {

            resolve("data is fatched")

        },1000);
        
    })
}

function proccessData() {

    return new Promise((resolve) => {

        setTimeout (() => {

            resolve("data Proccessed")
        }, 2000);

    })
}

function displayData() {

    return new Promise((resolve) => {

        setTimeout (() => {

            resolve("data displayed")
        }, 3000);
    })
}


async function executeData() {

    try {

        let data = await fetchData()

        console.log("data")


        let proccessedData = await proccessData()

        console.log("proccessedData")


        let displayedData = await displayData() 

        console.log("displayedData")

    } catch (error) {

        console.log("Error")
    }
}


executeData();