// json to object convert using .parse

let string = '{"name": "hardik", "age" : 24}'

let obj = JSON.parse(string)

console.log(obj.name);

console.log(obj.age);


// json to string convert using .stringify


let person = {

    name: "hardik",
    age: 23

}


let objData = JSON.stringify(person)

console.log(person.name)


// json to localStorage use 


// Step 1: Create a user preferences object
const userPreferences = {
    theme: "dark",
    language: "en",
    notificationsEnabled: true
};

// Step 2: Convert the object to a JSON string and store it in Local Storage
localStorage.setItem("userPreferences", JSON.stringify(userPreferences));

// Step 3: Confirm that the data is saved in Local Storage
console.log("Data saved in Local Storage:", localStorage.getItem("userPreferences"));



// example 1

let cartItems = [

    { productId: 101, productName: "Laptop", quantity: 1, price: 1200 },
  { productId: 102, productName: "Phone", quantity: 2, price: 800 },
]

localStorage.setItem('cartItems', JSON.stringify(cartItems))

console.log("cart item saved" , localStorage.getItem("cartItems"));



let storeCart = JSON.parse(localStorage.getItem("cartItems"));

storeCart.forEach(item => {

    console.log(`Product: ${item.productName}, Quantity: ${item.quantity}, Price: ${item.price}`);

});



let currentCart = JSON.parse(localStorage.getItem("cartItems"));

const newItem = { productId: 103, productName: "Headphones", quantity: 1, price: 150 };

currentCart.push(newItem);


localStorage.setItem("cartItems", JSON.stringify(currentCart));

console.log("Updated cart:", localStorage.getItem("cartItems"));
