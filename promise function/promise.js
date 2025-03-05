let promise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {

        resolve("successfully ")
    } else {

        reject("error")
    }
})

promise.then((result) => {

    console.log(result)

}).catch((error) =>{ 

    console.log(error)
});


// example 2

let hard = new Promise((resolve, reject) => {

    resolve(45);
})

hard.then(function(result) {

    console.log(result)
    return result * 2;

}).then(function(result) {

    console.log(result)
    return result + 5;

}).then(function(result) {

    console.log(result)
    return result -2;

}).then(function(result) {

    console.log(result);
})

.catch(function(error) {

    console.log(error)
})


// example 3  

let p1 = new Promise(function(resolve, reject) {

    setTimeout (() => {

        console.log("first p1 is resolve")
        resolve("p1 is resolve")
    }, 1000);

})

let p2 = new Promise(function(resolve, reject) {

    setTimeout (() => {


        console.log("second p2 is resolve")
        resolve("p2 is resolve")

    }, 2000);

})

let p3 = new Promise(function(resolve, reject) {

    setTimeout (() => {

        console.log("Third p3 is  resolve")

        resolve("p3 is resolve")
    }, 3000);
})

Promise.all([p1, p2, p3]) 

.then(function(result) {

    console.log(result)

})
.catch(function(error) {

    console.log(error)
})



// example 4


function fetchData(url) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {


            const data = { id: 1, name: "John", job: "Developer" };


            if (url === "https://www.google.com") {

                resolve(data); 
            } else {
                reject("Invalid URL");  
            }
        }, 2000);  
    });
}

fetchData("https://www.google.com")

    .then(data => {
        console.log("Data received:", data);
    })

    .catch(error => {
        console.log("Error:", error);
    });
