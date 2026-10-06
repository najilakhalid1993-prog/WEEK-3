//     Constructor Function

// Definition: A constructor function is used to create multiple objects with the same structure.
// Syntax:  function ConstructorName (value1, value2) {
//                                   this.property1= value1;
//                                   this.property2= value2;
//                                      }
// Example:
           function Employee (employeeName, employeeRole){
                   this.name=  employeeName;
                   this.role=  employeeRole;

           }
           const employeeOne= new Employee("Anu","Developer");
           const employeeTwo= new Employee("Riya","Designer");
           console.log(employeeOne);
           console.log(employeeTwo);
// Output: {name:'Anu', role: 'Developer'}
//         {name:'Riya', role: 'Designer'}

// How it works
// new Employee(...) → Creates a new object → this refers to that new object → 
// Values are assigned to its properties

// Final Conclusion
// → Constructor functions create multiple similar objects.
// → "new" creates a new object.
// → "this" refers to the newly created object.
// → Constructor names usually start with a capital letter.