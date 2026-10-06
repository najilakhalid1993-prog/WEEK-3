/*const numbers= [10,20,30,40,50]
let total=0
numbers.forEach((number)=>{
 total=total+number
})
console.log(total)
*/

// Question:2
/*const numbers=[5,10,15,20];

let newarray= numbers.map((number)=>{
    return number*2
})
console.log(newarray) 
*/
//Question:3
/*const students=[
    {name:"Aisha", mark:80},
    {name:"Rahul", mark:65},
    {name:"Sara", mark:90}
]
let newArray=students.forEach((student)=>{
     console.log(student.name , student.mark)
})
     */

//Question:4
/*const students=[
    {name:"Aisha", mark:80},
    {name:"Rahul", mark:65},
    {name:"Sara", mark:90}
]
let newArray= students.map((student)=>{
    return student.mark
})
console.log(newArray)
*/

//Question:5
/*const numbers= [12,7,25,18,30,9]
numbers.forEach((number)=>{
    if(number >15){
        console.log(number)
    }
})
    */

// Question 6
   /*const employees=[
    {
        name: "John",
        salaries:{
            jan:3000,
            feb:3200,
            march:3100
        }

    },
    {
        name: "Emma",
        salaries:{
            jan:4000,
            feb:4200,
            march:3100
        }

    },
    {
        name: "Mike",
        salaries:{
            jan:3500,
            feb:3600,
            march:3700
        }

    }
   ]
   employees.forEach((employee)=>{
    let salaries= Object.values(employee.salaries);
    let totalSalary= salaries.reduce((sum,value)=>{
        return sum+value
    },0)
    console.log(employee.name +":" + totalSalary)
   }
)*/


/*Question-7
const prices=[100,200,300,400]
const newArray= prices.map((price)=>{
    return price+10
})
console.log(newArray)
*/


/* Question-7
const products=[
    {name:"Pen",price:10},
    {name:"Book",price:50},
    {name:"Bag",price:100}

]
let totalPrice= 0;
products.forEach((product)=>{
    totalPrice=totalPrice+product.price
})
console.log(totalPrice)
*/

/*Question -8
const numbers=[2,4,6,8]
const newarray= numbers.map((number)=>{
    return number/2
})
console.log(newarray)
*/

/*Question-9
const employees=[
    {
        name:"jone", salary: 3000
    },
    {
        name:"Sara", salary: 4000
    },
    {
        name:"Ali", salary: 3500
    }
]

const newArray= employees.map((employee)=>{
    return  {
        name: employee.name,
        salary: employee.salary+500
    }
})
console.log(newArray)
*/
/*
const students =[
    { name: "Meera", marks:{ math:78, english:66, science:81}},
     { name: "Rahul", marks:{ math:92, english:74, science:88}},
      { name: "Anu", marks:{ math:65, english:80, science:70}}
]
let newArray= students.map((student)=>{
    return { name: student.name , 
        total: student.marks.math+ student.marks.english+ student.marks.science
    }
})
console.log(newArray)
*/

/*const products=[
    {
        name: "Pen", quantity:10, price:5
    },
     {
        name: "Notebook", quantity:3, price:20
    },
     {
        name: "Pencil", quantity:15, price:2
    }
]
let total=0
products.forEach((product)=>{ 
    return total =total+(product.quantity* product.price)}
)
console.log(total)
*/
/*
const orders= [
    { customer: "A" ,items:[100,200,50]
    },
     { customer: "B" ,items:[300,100]
    },
     { customer: "C" ,items:[50,50,100]
    },
]
 let total= orders.reduce((sum,order)=>{
    let itemtotal=order.items.reduce((sum2,item)=>{
        return sum2+item
    },0);
        return sum+ itemtotal;

 },0)
 console.log(total)
 */


 // Question
 /*

 const departments=[
    { name: "IT",
        employees:[{name: "Asha", salary:30000},
            { name: "Rahul", salary: 40000}
        ]
    },
    { name: "HR",
        employees:[{name: "Neha", salary:35000},
            { name: "Arun", salary: 45000}
        ]
    },
    { name: "IT",
        employees:[{name: "Maya", salary:25000},
            { name: "Vijay", salary: 30000}
        ]
    },
 ]

 let totalSalary= departments.reduce((sum,department)=>{
       let departmentSalary= department.employees.reduce((empSum,employee)=>{
        return empSum+ employee.salary
       },0);
       return sum+ departmentSalary;
 },0)
 console.log(totalSalary)
 */

 //Question

 /*
 const stores=[
    {name: "Store A",
        products: [ {name: "Pen", price :10, quantity:5},
                    {name: "Book", price :50, quantity:2} 
                  ]
    },
     {name: "Store B",
        products: [ {name: "Bag", price :500, quantity:1},
                    {name: "Pencil", price :10, quantity:10} 
                  ]
    }
 ]
 let totalSales= stores.reduce((sum,store)=>{
    let storeSales= store.products.reduce((proSum,product)=>{
        return proSum+(product.price*product.quantity)
    },0)
    return sum+ storeSales;
 },0)
 console.log(totalSales)
 */

 // Question
/*
 const companies= [
    {
        name: "Google",
        employees:[
            {
                name:"Ayisha",
                salary:50000
            },
            {
                name:"Rahul",
                salary:60000
            }
        ]
    },
    {
        name: "Microsoft",
        employees:[
            {
                name:"Neha",
                salary:70000
            },
            {
                name:"Arun",
                salary:40000
            }
        ]
    }
 ]
 let totalSalary= companies.reduce((sum,company)=>{
    let companySalary= company.employees.reduce((compSum,employee)=>{
        return compSum+ employee.salary
    },0)
    return sum+ companySalary
 },0)
 console.log(totalSalary)
 */

 // Question
 /*
 const schools=[
    {
        name: "School A",
        students:[
            {name: "Anu", marks:80},
            {name:"Rahul", marks:90}
        ]
    },
     {
        name: "School B",
        students:[
            {name: "Meera", marks:70},
            {name:"Arun", marks:85}
        ]
    },
 ]
 let totalMarks= schools.reduce((sum,school)=>{
    let schoolMark= school.students.reduce((schoolSum,student)=>{
        return  schoolSum+ student.marks
    },0)
    return sum+ schoolMark;
 },0)
 console.log(totalMarks)
 */

 // Question
/*
 const orders =[
    {
        customer:"Ayisha",
        products:[
        { name: "Pen", price:20, quantity:3},
        { name: "Book", price:100, quantity:2}
        ]
    },
     {
        customer:"Rahul",
        products:[
        { name: "Bag", price:500
            , quantity:1},
        { name: "Pencil", price:10, quantity:5}
        ]
    }
 ]
 let totalBill= orders.reduce((sum , order)=>{
    let customerBill= order.products.reduce((customerSum,product)=>{
        return customerSum+(product.price* product.quantity)
    },0)
    return sum+ customerBill
 },0)
 console.log(totalBill)
 */

 