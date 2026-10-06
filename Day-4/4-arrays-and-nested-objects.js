//       Arrays of Objects & Nested Structures

// 1. Array of Objects

//    Definition: An array that contains multiple objects.
//    Example: 
              const studentList=[ 
                {
                name:"Aman",
                age:20
                },
                {
                    name:"Sara",
                    age:21
                }
            ]
            console.log(studentList[0].name);
            console.log(studentList[1].age);
//    Output: Aman
//            21

//    Accessing:
//    studentsList[0]          → First
//    studentsList[0].name     → name of first object.

// 2. Array Inside Object

//    Definition: An object can contain an array as a property.
//    Example:   
               const school={
                name: "ABC school",
                subjects:["Math","English","JavaScript"]
               }
               console.log(school.subjects);
               console.log(school.subjects[1]);
//     Output : [ "Math", "English", "JavaScript"]
//              English

//     Accessing:
//     school.subjects       → Entire Array
//     school.subjects[1]    → Second Item

// 3. Nested Objects

//    Definition: An object inside another object is called nested object.
//    Example:
              const userDetails= {
                name: "Riya",
                address:{
                    city: "Kannur",
                    country: "India"
                }
              };
              console.log(userDetails.name);
              console.log(userDetails.address.city);
// Output: Riya
//         Kannur

// Accessing nested property: userDetails → address → city

// 4. Combining All Structures

//    Objects can contain arrays , and arrays can contain objects.
//    Example:
              const companyData= {
                companyName: "TechWorld",
                employees:[
                    {
                        name:"anu",
                        skills: ["HTML", "CSS"]
                    },
                    {
                        name:"Dev",
                        skills: ["JavaScript", "React"]
                    }
                ]
              };
              console.log(companyData.employees[0].name);
              console.log(companyData.employees[1].skills[0])

//    Output: Anu
//            JavaScript

// Final Conclusion:
// * Array of objects → [{},{},{}]
// * Array inside object → { items: []}
// * Nested object → { user: { address:{}}}
// * Use [] to access array items.
// * Use .property to access object properties.