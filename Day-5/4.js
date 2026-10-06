
// Shallow Copy vs Deep Copy


// Definition:

// Shallow Copy:
// Copies the outer object, but nested objects
// are still shared.

// Deep Copy:
// Creates a completely independent copy,
// including nested objects.


// 1. Shallow Copy


const originalStudent = {
    name: "Aisha",
    address: {
        city: "Kochi"
    }
};

const shallowStudent = { ...originalStudent };

shallowStudent.address.city = "Kannur";

console.log(originalStudent.address.city);


// Output:
// Kannur

// Why?

// The outer object was copied,
// but the nested address object is still shared.


// originalStudent.address
//          ↘
//           Same nested object
//          ↗
// shallowStudent.address


// 2. Deep Copy using structuredClone()

// structuredClone() creates a deep copy.

const originalEmployee = {
    name: "Rahul",
    address: {
        city: "Kochi"
    }
};

const deepEmployee = structuredClone(originalEmployee);

deepEmployee.address.city = "Calicut";

console.log(originalEmployee.address.city);
console.log(deepEmployee.address.city);


// Output:
// Kochi
// Calicut


// Important:

// Changing the nested object in the deep copy
// does NOT affect the original object.


// Shallow vs Deep Copy

// Shallow Copy:
// Outer object → copied
// Nested object → shared

// Deep Copy:
// Outer object → copied
// Nested object → also copied



// Memory Trick:

// Shallow → "Only the surface"

// Deep → "Everything inside"

// structuredClone()
// → "Make a completely separate copy"


// Final Conclusion:

// ✔ Shallow copy copies only the outer level.
// ✔ Nested objects remain shared in a shallow copy.
// ✔ Deep copy creates independent nested objects.
// ✔ structuredClone() can be used to create a deep copy.