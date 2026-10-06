
// JSON (JavaScript Object Notation)

// Definition:


// JSON is a text format used to store and exchange data.

// JSON looks similar to a JavaScript object,
// but JSON is a STRING.


/*
JavaScript Object → actual object
JSON              → string
*/



// 1. JavaScript Object → JSON String


// JSON.stringify() converts a JavaScript object
// into a JSON string.

const product = {
    name: "Laptop",
    price: 50000
};

const productJson = JSON.stringify(product);

console.log(productJson);
console.log(typeof productJson);


// Output:
// {"name":"Laptop","price":50000}
// string



// 2. JSON String → JavaScript Object


// JSON.parse() converts a JSON string
// into a JavaScript object.

const studentJson = '{"name":"Aisha","age":20}';

const studentObject = JSON.parse(studentJson);

console.log(studentObject);
console.log(studentObject.name);


// Output:
// { name: "Aisha", age: 20 }
// Aisha


// Important:


// JSON.stringify()
// Object → JSON String

// JSON.parse()
// JSON String → Object


// Memory Trick:


// stringify → makes it a STRING
// parse     → reads/converts the STRING


// Remember:

// Object
//   ↓ stringify()
// JSON String
//   ↓ parse()
// Object


// Final Conclusion:

// ✔ JSON is a text format for storing/exchanging data.
// ✔ JSON.stringify() converts Object → JSON String.
// ✔ JSON.parse() converts JSON String → Object.
// ✔ JSON data uses double quotes around keys and string values.