//      in Operator

// Definition: The "in" operator checks whether a property exists inside an object.
// Syntax: "property" in object
// Example:
           const product = {
               name: "Laptop",
               price:50000
           };
           console.log("name" in product);
           console.log("price" in product);
           console.log("brand" in product);
// Output:
//        true
//        true
//        false

// Checking a Property

// If the property exist → true
// If the property doesnot exist → false

// Example:
           const bookInfo= {
               title: "JavaScript Basics",
               author: "John"
           };
           console.log("title" in bookInfo);
           console.log("pages" in bookInfo);
// Output: 
//        true
//        false

// Important

// "in" checks the PROPERTY NAME, not the property's value.

// Example:
          const accountInfo={
            username: "admin",
            password: undefined
          };
          console.log("password" in accountInfo);
// Output: true
// Even though  the value is undefined the property still exists.

// Final Conclusion:
// → "in" checks whether a property exists 
// → It returns true or false.
// → Syntax : "property" in object
// → It checks the property, not its value.
