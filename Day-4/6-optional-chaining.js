// Optional Chaining ?

// Definition: Optional Chaining (?.) safely accesses a property that may not exist.
//             It prevents an error and returns undefined.

// 1. Basic Example
 
    const member={
        name: "Aisha",
        age:22
    };
    console.log(member.name);
    console.log(member.city);
// Output:
//         Aisha
//         undefined

// 2. Optional Chaining

//    Syntax: object?.property
//    Example:
              const customerInfo= {
                name: "Rahul"
              };
              console.log(customerInfo?.name);
              console.log(customerInfo?.address);
// Output: 
//        Rahul
//        undefined

// Without ?.:
// customerInfo.address.city
// Error because address doesnot exist.

// With ?. :
            console.log(customerInfo.address?.city);
// Output : undefined

// 3. Nested Objects

       const studentInfo={
        name: "Meera",
        address:{ 
            city: "Kochi"
        }
       };
       console.log(studentInfo.address?.city);
       console.log(studentInfo.address?.country);
// Output:
//        Kochi
//        undefined

// 4. When the Object Itself May Be missing
      
      const userData = null;
      console.log(userData?.name);
//     Output: undefined

//     Without ?. 
//     console.log(userData.name);
//     TypeError

// 5. Optional Chaining with Arrays

//    We can also safely access an array item.

         const courseData={
            lessons: ["HTML", "CSS", "JavaScript"]
         };
         console.log(courseData.lessons?.[2]);
         console.log(courseData.lessons?.[5]);
//     Output: 
//             JavaScript
//             undefined

// 6. Optional Chaining with Methods
  
        const profileData= {
            showMessage(){
                console.log("Hello!");
            }
        };
        profileData.showMessage?.();
//     Output: Hello!

//     If showMessage does not exist:
         const guestProfile={};
         guestProfile.showMessage?.()
//      Output: undefined
//      No error occurs.

//    Optional Chaining vs Normal Access

//     Normal acces:
//     object.property
//     → Can cause an error if the object is null/undefined.

//     Optional Chaining:
//     object?.property
//     → Safely returns undefined.

//     Final Conclusion:
//     → ?. safely accesses properties.
//     → It prevents errors when a value is null/undefined.
//     → It can be used with objects, arrays and methods.



