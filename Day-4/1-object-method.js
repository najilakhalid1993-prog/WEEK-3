///             Object Methods

// Definition: A method is a function stored inside an object.
// Syntax: 
//          const objectName = {
//                                methodName: function() {
//                                                  //code           
//                                 }      
//                              }
// Example:
        const student= {
            name: "Aisha",
            greet: function(){
                console.log("Hello, I am Aisha");
            }
        }
        student.greet();

// Output: Hello , I am Aisha

//     Shorthand Method Syntax

// Definition: We can write an object method without using the "function" keyword.
// Syntax: 
//         const objectName= {
//                             methodName() {
//                                            //code     }      
//                            };

// Example:
            const teacher = {
                name: "Rahul",
                introduce(){
                    console.log("I am a JavaScript teacher")
                }
            };
            teacher.introduce();
// Output : I am a JavaScript teacher

// Final Conclusion:
// → A function inside an object is called a method.
// → Shorthand syntax makes object methods shorter.
// → We call a method using object.method().