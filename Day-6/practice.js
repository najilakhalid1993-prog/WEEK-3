/* 
Question 1)
             console.log("5"-1+1);
             console.log("5"+1-1);
 */

/*
 // Question 2)
 //            Remove all falsy values without using.filter()
 const arr =[ 0 , 1 , "" , "text" , undefined , null , NaN , 42 ] 
 const result=[]
 for(const value of arr){
    if(value){
        result.push(value);
    }
 }
 console.log(result)
 */

 // Question:3)

              console.log(1+true);
              console.log("10"*"2");
              console.log("10"+true);
              console.log(undefined+1);

// Question 4)

//  Write a function that uses a callback to return the first vowel in a string.

     function findFirstVowel (word,callback){
        for(let char of word){
            if("aeiouAEIOU".includes(char)){
                return callback(char)
            }
        }
     }
     function showVowel(vowel){
        return vowel;
     }
     console.log(findFirstVowel("Apple",showVowel))

// Question 5)
//              Use reduce to flatten this array:
      const data= [{name:"Ali" , scores:[10,20]},
                {name:"Sara",scores:[30,40]}
      ]
      const result= data.reduce((acc,current)=>{
         return acc.concat(current.scores)
      },[])
      console.log(result);


 // Question:6)

// Use Regex to check whether a string starts with a vowel

       const str= "Apple";
       const result1= /^[aeiou]/i.test(str);
       console.log(result1)


// Question:7)
    
const user= {
    profile:{
        address:{
            city:"Dubai"
        }
    }
};
   
console.log(user.profile?.address?.city);
console.log(user.profile?.contact?.phone);

// Output:
// Dubai
// Undefined

// Question : 8)

const [a,b,...rest] = [10,20,30,40]
console.log(a,b);
console.log(rest);

// Output
// 10,20
// [30,40]

// Question: 9)
// Explain object property shorthand and predict the output:
      const name="Ali";
      const age=25;
      console.log(user);
// What will be the output
// Output:
//       {name:"Ali", age:25}
// Definition:
//             Object propert shorthand is a short way of writting object properties
//             when the property name and variable name are the same.

// Question:10)

// Use call() to bind this:
function greet(){
    return `Hello, ${this.name}`;
}
const user1 = {name: "Reem"};
console.log(greet.call(user1))

// Output: Hello, Reem

// Question: 12)
// What will be the output?
 const original={
    name: "Ali",
    info:{ 
        city: "Dubai"
    }
 };
 const copy ={...original};
 copy.info.citry= "Abu Dhabi"
 console.log(original.info.city);

 // Output: "Abu Dhabi"
 //         Because the shallow copy shares the nested info object reference with original.

 // Question 12)
 //           What will be the output ?
        const base= {role: "user"};
        const admin= Object.create(base);
        admin.nam= "Aisha";
        console.log(admin.role);

// Output : user
//          That's because admin inherits the role property from base.