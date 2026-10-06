
// Prototype & Inheritance

// Definition:
// Prototype:
// Every JavaScript object can have a prototype.
// A prototype is an object from which another object
// can inherit properties and methods.

// Inheritance:
// One object/class can access properties and methods
// from another object/class.


// 1. Prototype Example

const student = {
    name: "Aisha"
};

console.log(student.toString());


// Output:
// [object Object]


// Important:

// We did NOT create toString() inside student.

// JavaScript finds toString() through the
// object's prototype.


// 2. Prototype with Constructor Function


function student(studentName, studentAge) {
    this.name = studentName;
    this.age = studentAge;
}

student.prototype.introduce = function () {
    console.log(`My name is ${this.name}`);
};

const studentOne = new student("Rahul", 21);

studentOne.introduce();


// Output:
// My name is Rahul

// Why does this work?

// studentOne does not directly contain introduce().

// JavaScript looks at:
// studentOne
//      ↓
// Student.prototype
//      ↓
// finds introduce()


// 3. Inheritance

// Inheritance means getting properties or methods
// from another object/class.

class Person {
    greet() {
        console.log("Hello!");
    }
}

class Teacher extends Person {
    teach() {
        console.log("Teaching JavaScript");
    }
}

const teacherOne = new Teacher();

teacherOne.greet();
teacherOne.teach();


// Output:
// Hello!
// Teaching JavaScript


// Important:


// Teacher inherits greet() from Person.

// Teacher has:
// ✔ greet() → inherited from Person
// ✔ teach() → its own method


// Memory Trick:


// Prototype → "Parent source"

// Inheritance → "Child gets from Parent"

// Think:

// Parent
//   ↓
// Child


// Final Conclusion:

// ✔ Prototype allows objects to share properties/methods.
// ✔ JavaScript searches the prototype when a property/method
//   is not found directly on the object.
// ✔ Inheritance allows one class/object to use another's features.
// ✔ `extends` is used for class inheritance.