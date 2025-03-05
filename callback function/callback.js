function multiply(a, b, callback) {

    let result = a * b 

    callback(result);
}

function display(value) {

    console.log("result is ", value)


}

multiply(5, 6, display)


// example 2

function processData(data, callback, dataerror) {

    if (data < 0) {

        dataerror("data is negative");
    } else {
        let result = data + 5;

        callback(result);
    }
}
function hendlersuccess(result) {

    console.log("success is :", result);
}


function hendlerError(error) {

    console.log("error is :", error);
}

processData(34, hendlersuccess, hendlerError);  

//  example 3


function sumarr(num, callback) {

    let sum = 0;

    for (let i = 0; i < num.length; i++) {

        sum += num[i];
    }

    callback(sum);
}

function displayarr(result) {

    console.log("sum arr" , result)
}

let num = [1, 4, 5, 6, 8, 3]

sumarr(num, displayarr);

// example 4 
let Number = prompt("enter your Number : ")

function oddorEvenNumber(Number, callback) {

    let result = (Number % 2 == 0) ? 'even' : 'odd';

    callback(Number, result);
}

function displayoddorEvenNumber(Number, result) {

    console.log("The number " + Number + " is " + result);

}    

oddorEvenNumber(Number, displayoddorEvenNumber)


// example 5 

function fetchData(callback) {

    console.log("data is Loading........")

    setTimeout(() => {

        let data = {id: 1, name : 'hardik'}

        callback(data);
        
    }, 2000);
}

function displaydata(data) {

    console.log("get data successfully" , data)

}

fetchData(displaydata);

// example 6

let Number1 = [23, 45, 1213, 67, 85, 43] 


function sortArr(arr, callback) {

    arr.sort((a, b) =>  a - b)
    
    callback(arr)

}

function displayarr(result)  {

    console.log("sortedarr", result)
}


sortArr(Number1, displayarr);

