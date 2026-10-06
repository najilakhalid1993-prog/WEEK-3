//      This, Lexical Scope, Arrow Function, Regular Function, Call , Apply, Bind

// 1. What is "this" ?
//    Definition:  "this" refers to the object that calls the function.
//    Example:
           const customer= {
            name: "Aisha",
            showName () {
                console.log(this.name);
            }
           };
          customer.showName();
//    Output: Aisha

// 2. this in regular function
//    Definition: In a regular funtion , "this" depends on how the function is called.
//    Example:
            const profile= {
              name: "Rahul",
              displayName: function(){
                console.log(this.name);
            }
        }
profile.displayName();
// Output: Rahul
// Here: profile.displayName() → "this" refers to profile

// 3. this in Arrow Function
//    Definition: Arrow functions do NOT have their own "this".
//                They thale "this" from their surrounding scope.
//                This is called lexical "this".
//    Example:
              const account = {
                name: "Neha",
                showName: ()=> {
                    console.log(this.name)
                }
              }
              account.showName();
//     Output: undefined

// 4. Lexical Scope
//    Definition: Lexical scope means a function can access 
//                variables from where it was created.


// 5. call()
//    Definition: call() immediately calls a function
//                with a specified "this".
//    Syntax: function.call(object,argument1,argument2)
//    Example:
               function introduce(city){
                console.log(this.name + " lives in " + city) 
               }
               const personA = {
                name:"Arjun"
               }
               introduce.call(personA, "Kochi")

// 6. apply()
//    Definition: apply() works like call().
//                But arguments are passed inside an array.
//    Syntax:  function.apply(object, [arg1,arg2]);
//    Example:
              function showInfo( city,job) {
                console.log(this.name);
                console.log(city);
                console.log(job);
              }
              const personB={
                name: "Diya"
              };
              showInfo.apply(personB,["Kannur","Developer"])

//    Output: Diya
//            Kannur
//            Developer

// 7. bind()
//    Definition: bind() creates a new function with a fixed "this" value.
//    Example: 
              function showLocation() {
                console.log( this.name+ " lives in "+ this.city)
              }
              const personC ={
                name: "Nikhil",
                city: "Calicut"
              }
              const locationFunction= showLocation.bind(personC);
              locationFunction();

//    Output: Nikhil lives in Calicut.

//    Call vs Apply vs Bind
// 
//    call()
//    → Calls immediately
//    → Arguments seperately

//    apply()
//    → Calls immediately
//    → Arguments in an array.

//    bind()
//    → Doesnot call immediately
//    → Creates a new function.

//    Final Conclusion
//    → Regular functions have their own "this" behavior.
//    → Arrow functions use lexical "this".
//    → Lexical means taking something from the surrounding scope.
//    → call() calls immediately with a chosen "this".
//    → apply()is like call() , but uses an array.
//    → bind() returns a new function with fixed "this".