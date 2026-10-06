/*✅ Part 2: Practical Review (10 minutes)

Question: Student Marks Calculation

You are given the following array of student objects. Each student has a marks object with scores for three subjects.*/

const students = [

{

   name: "Alice",

   marks: {

     math: 80,

     science: 75,

     english: 90

   }

},

{

   name: "Bob",

   marks: {

     math: 60,

     science: 70,

     english: 85

   }

},

{

   name: "Charlie",

   marks: {

     math: 90,

     science: 95,

     english: 88

   }

}

];
/*
❓ Your Questions:

1. Print the total marks for each student using reduce().

2. Create a new array where each object contains the name and total marks of the student.*/
 
const newArray= students.map((student)=>{
   let total= Object.values(student.marks)
   .reduce((sum,mark)=>{
    return sum+mark
   },0)
   return{ name: student.name,
    total: total
   }
   
})
console.log(newArray)