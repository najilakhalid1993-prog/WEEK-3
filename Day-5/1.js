
// Spread, Destructuring & Rest Operator


// Definition:

// Spread (...) → Expands elements/values.
// Destructuring → Extracts values from arrays/objects.
// Rest (...) → Collects multiple values into one variable.


// 1. Spread Operator

// Spread expands the elements of an array or object.

const firstNumbers = [10, 20, 30];

const combinedNumbers = [...firstNumbers, 40, 50];

console.log(combinedNumbers);


// Output:
// [10, 20, 30, 40, 50]



// 2. Spread with Objects

const firstStudent = {
    name: "Aisha",
    age: 20
};

const updatedStudent = {
    ...firstStudent,
    course: "JavaScript"
};

console.log(updatedStudent);


// Output:
// { name: "Aisha", age: 20, course: "JavaScript" }


// 3. Array Destructuring


// Destructuring extracts values from an array.

const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// Output:
// Red
// Green
// Blue


// 4. Object Destructuring

const employee = {
    employeeName: "Rahul",
    employeeAge: 25
};

const { employeeName, employeeAge } = employee;

console.log(employeeName);
console.log(employeeAge);


// Output:
// Rahul
// 25


// 5. Rest Operator

// Rest collects multiple values into one array.

function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(100, 200, 300));


// Output:
// 600



// 6. Nested Destructuring

// Nested destructuring extracts values
// from objects/arrays inside another object/array.

const userProfile = {
    userName: "Fathima",
    address: {
        city: "Kochi",
        country: "India"
    }
};

const {
    address: { city }
} = userProfile;

console.log(city);


// Output:
// Kochi



// Memory Trick:

// Spread  → "Spread OUT"  → expands values
// Rest    → "Rest TOGETHER" → collects values
// Destructuring → "Take OUT" → extracts values



// Final Conclusion:

// ✔ Spread (...) expands values.
// ✔ Destructuring extracts values.
// ✔ Rest (...) collects multiple values.
// ✔ Nested destructuring extracts values from nested structures.