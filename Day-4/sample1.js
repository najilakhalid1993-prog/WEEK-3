/*
const orders=[
    {
        orderId:1,
        items:[{ name: "Pen", price:10},
            { name: "Book", price:50}
        ]
    },
    {
        orderId:2,
        items:[{ name: "Bag", price:500}
        ]
    },
    {
        orderId:3,
        items:[{ name: "Pencil", price:5},
            { name: "NoteBook", price:40}
        ]
    },
]
const orderTotal= orders.map(order=>{
    const totalAmount= order.items.reduce((sum, item)=>{
        return sum+ item.price;
    },0)
    return{
        orderId : order.orderId,
        totalAmount: totalAmount
    }

})
orderTotal.map(order=>{
    console.log(`Order ${order.orderId} - Total: ${order.totalAmount}`)
})
    */
/*
const  students=[
    {
        id:1,
        name: "Aisha",
        marks:[80,90,70]
    },
    {
        id:2,
        name: "Rahul",
        marks:[75,85,95]
    },
    {
        id:3,
        name: "Sara",
        marks:[90,88,92]
    }
]
 const totalMarks= students.map(student=>{
    const studentTotal= student.marks.reduce((sum,mark)=>{
        return sum+ mark;
    },0)
    return {
        id : student.id,
        name: student.name,
        totalMarks: studentTotal

    }
 })
 totalMarks.map(student=>{
    console.log( `${student.name }- Total : ${student.totalMarks}`)
 })
    */

 /*const carts=[
    {cartId:1,
        products:[
            { name:"Laptop",price:50000},
            {name:"Mouse",price:1000}
        ]
    },
    {cartId:2,
        products:[
            { name:"Keyboard",price:2000},
            {name:"Headset",price:3000}
        ]
    },
    {cartId:1,
        products:[
            { name:"Monitor",price:15000},
        
        ]
    }
 ]
 const cartTotal= carts.map(cart=>{
   const totalAmount= cart.products.reduce((sum,product)=>{
    return sum+product.price;
   },0)
   return{
    cartId : cart.cartId,
    totalAmount: totalAmount
   }
 })
 cartTotal.map(cart=>{
    console.log(` Cart ${cart.cartId} - Total : ${cart.totalAmount}`)
 })
    */
   /*
const classes = [
    {
        name: "Class A",
        students: [
            { name: "Anu", marks: 80 },
            { name: "Rahul", marks: 75 },
            { name: "Meera", marks: 90 }
        ]
    },
    {
        name: "Class B",
        students: [
            { name: "Arun", marks: 85 },
            { name: "Neha", marks: 95 }
        ]
    }
];
let classTotal= classes.reduce((sum,classItem)=>{
    let studentTotal= classItem.students.reduce((stuSum, student)=>{
return stuSum+ student.marks;
    },0)
    return sum+ studentTotal
},0)
console.log(classTotal)
*/
/*
const teams = [
    {
        name: "Team A",
        players: [
            { name: "Asha", points: 20 },
            { name: "Rahul", points: 30 },
            { name: "Meera", points: 25 }
        ]
    },
    {
        name: "Team B",
        players: [
            { name: "Arun", points: 15 },
            { name: "Neha", points: 35 }
        ]
    }
];

const totalScore= teams.reduce((sum,team)=>{
    const teamScore= team.players.reduce((tsum,player)=>{
        return tsum+ player.points
    },0)
    return sum+teamScore;
},0)
console.log(totalScore)
*/

/*const restaurants =[
    {name:"Restaurant A",
        orders:[
            {item: "Pizza", price:200,quantity:2},
            {item: "Burger",price:150,quantity:1}
               ]
    },
    {name:"Restaurant B",
        orders:[
            {item: "Biriyani", price:250,quantity:2},
            {item: "Juice",price:50,quantity:3}
               ]
    }
]
const totalRevenue= restaurants.reduce((sum,restaurant)=>{
    const restRevenue= restaurant.orders.reduce((rsum,order)=>{
       return rsum+ (order.price*order.quantity)
    },0)
    return sum+ restRevenue
},0)
console.log(totalRevenue)
*/
/*
const employees=[
    {name: "john", salary:3000},
     {name: "sara", salary:4000},
      {name: "Ali", salary:3500},
]

let newarray= employees.map(employee=>{
    return {
        name: employee.name,
        salary: employee.salary+500
    }
})
console.log(newarray)
*/
/*
const students=[
    {name:"aisha", mark:80},
        {name:"rahul", mark:80},
            {name:"sara", mark:70},
                {name:"ali", mark:35}
]
students.forEach(student=>{
    if (student.mark >=50){
        console.log(student.name ,student.mark)
    }
})
    */

/*const products=[ {name: "Pen", price:20},
                 {name: "book", price:100},
                 {name: "bag", price:200},]

                 let newarray= products.map(product=>{
                    return product.name
                 })
                 console.log(newarray)*/

                 
                 /*const orders=[
                    {
                        orderId:1,
                        items:[{name:"pen",price:10},
                            {name:"book", price:50}
                        ]
                    },
                    {
                        orderId:2,
                        items:[{name:"bag",price:500},
                        
                        ]
                    },
                    {
                        orderId:1,
                        items:[{name:"pencil",price:5},
                            {name:"notebook", price:40}
                        ]
                    }
                 ]
                    */
                   
                 /*const students=[
                    {name:"aisha",marks:[80,75,90]},
                    {name:"rahul", marks:[60,70,75]},
                    {name:"meera", marks:[95,85,90]}
                   ]
                   let newArray= students.map(student=>{
                    let totalMarks= student.marks.reduce((sum,mark)=>{
                        return sum+ mark
                    },0)
                    return{
                        name: student.name,
                        totalMarks: totalMarks
                    }
                   })
                   console.log(newArrayz)
                   */
/*
                   const students=[ 
                    { name:"aisha",marks:[80,75,90]},
                    {name:"rahul",marks:[60,70,65]},
                    {name:"meera", marks:[95,88,92]}
                   ]
                  let  newArray= students.map(student=>{
                    let totalMarks= student.marks.reduce((sum,mark)=>{
                        return sum+mark
                    },0)
                    return{ name:student.name,
                        totalMarks: totalMarks
                    }
                  })
                  newArray.forEach(student=>{
                    console.log(`${student.name} - Total: ${student.totalMarks}`)
                  })
                    */
/*
                  const carts=[
                    {
                        userId:1,
                        items:[
                            {name:"Laptop",price:50000},
                            {name:"mouse",price:1000}
                        ]
                    },
                    {
                        userId:2,
                        items:[
                            {name:"phone",price:25000},
                            {name:"charger",price:1500}
                        ]
                    },
                    {
                        userId:3,
                        items:[
                            {name:"keyboard",price:2000},
                            {name:"headphone",price:3000}
                        ]
                    }
                  ]
                  let newarray= carts.map(cart=>{
                    let totalAmount= cart.items.reduce((sum,item)=>{
                        return sum+item.price
                    },0)
                    return{
                        userId: cart.userId,
                        totalAmount: totalAmount
                    }
                  })
                  newarray.forEach(cart=>{
                    console.log(`User ${cart.userId} - Total: ${cart.totalAmount}`)
                  })
                    */
                   /*
                   const employees=[{name: "arun", salary:30000, department:"IT"},
                    {name: "sara", salary:50000, department:"HR"},
                    {name: "John", salary:45000, department:"IT"},
                    {name: "Meera", salary:60000, department:"Finance"}
                   ]
                   const result= employees.filter(employee=>{
                    return employee.salary>40000
                   }).map(employee=>{
                    return employee.name
                   })
                   console.log(result)
                   */
                  
                  /* const products=[
                    {name:"laptop", price:60000,rating:4.5},
                     {name:"mouse", price:800,rating:3.8},
                      {name:"keyboard", price:2000,rating:4.2},
                       {name:"monitor", price:15000,rating:4.7},
                   ]
                   let result= products.filter(product=>{ 
                    return product.rating>= 4
                   }).map(product=> {
                    return product.name
                   })
                   console.log(result)
                   */
/*
                   const students=[
                    {name:"aisha",
                        subjects: [{subject: "Maths", mark:90},
                            {subject: "Science" , mark:85},
                            {subject:"English", mark:80}
                        ]
                    },
                    {name:"Rahul",
                        subjects: [{subject: "Maths", mark:70},
                            {subject: "Science" , mark:75},
                            {subject:"English", mark:65}
                        ]
                    }
                   ]
                   let result= students.map(student=>{
                    let totalMark=student.subjects.reduce((sum,subject)=>{
                        return sum+ subject.mark
                    },0)
                    const average= totalMark/student.subjects.length;
                    return {name: student.name,
                        totalMark: totalMark,
                        average:average
                    }
                   })
                   result.forEach(student=>{
                    console.log(`${student.name} - Total: ${student.totalMark} - Average: ${student.average}`)
                   })
                    */
                   /*
                   const orders=[
                    {
                        orderId: 101,
                        items:[
                            {name:"burger",price:150},
                            {name:"Fries",price :80},
                            {name:"juice",price:50}
                        ]
                    },
                    {
                        orderId: 102,
                        items:[
                            {name:"pizza ",price:300},
                            {name:"cock",price :60},
                        
                        ]
                    },
                    {
                        orderId: 103,
                        items:[
                            {name:"sandwich",price:120},
                            {name:"coffee",price :70},
                            
                        ]
                    }
                   ]
                   let result= orders.map(order=>{
                    let orderTotal= order.items.reduce((sum,item)=>{
                        return sum+item.price

                    },0)
                    return {
                        orderId: order.orderId,
                        orderTotal: orderTotal
                    }
                   })
                   result.forEach(order=>{
                    console.log(`Order ${order.orderId} - Total: ${order.orderTotal}`)
                   })
                    */
                   /*
                   const orders=[
                    {orderId:1,
                        items:[{name:"Pen",price:100},
                            {name:"Book",price:200}
                        ]
                    },
                    {orderId:2,
                        items:[{name:"Bag",price:600},
                            {name:"Bottle",price:300}
                        ]
                    },
                    {orderId:1,
                        items:[{name:"Shoes",price:1000},
                            {name:"Socks",price:200}
                        ]
                    }
                   ]
                   const result= orders.map(order=>{
                    const totalAmount= order.items.reduce((sum,item)=>{
                        return sum+item.price;
                    },0)
                    return {orderId: order.orderId,
                        totalAmount: totalAmount
                    }
                   }).filter(order=>{
                    return order.totalAmount>500
                   })
                   result.forEach(order=>{
                    console.log(`Order ${order.orderId} - Total: ${order.totalAmount}`)
                   })
                    */
                   /*
                   const departments=[
                    {name:"IT",
                        employees:[{name:"Aisha", salary:50000},
                            {name:"Rahul", salary:60000}
                        ]
                    },
                    {name:"HR",
                        employees:[{name:"Meera", salary:40000},
                            {name:"John", salary:45000}
                        ]
                    },
                    {name:"Finance",
                        employees:[{name:"Sara", salary:70000},
                            {name:"David", salary:55000}
                        ]
                    },
                   ]
                   const result= departments.map(department=>{
                    const totalSalary= department.employees.reduce((sum,employee)=>{
                        return sum+ employee.salary
                    },0)
                    return { name : department.name,
                        totalSalary: totalSalary
                    }

                   })

                   result.forEach(department=>{
                    console.log(`${department.name} - Total Salary : ${department.totalSalary}`)
                   })
                    */

/*const employees=[
    {
        name:"John",
        salaries:{
            jan: 3000,
            feb:3200,
            mar:3100
        }
    },
    {
        name:"Emma",
        salaries:{
            jan: 4000,
            feb: 4200,
            mar: 4100
        }
    },
    {
        name:"Mike",
        salaries:{
            jan: 3500,
            feb:3600,
            mar:3700
        }
    },
]
     employees.forEach((employee)=>{
        let salaries= Object.values(employee.salaries);
        let totalSalary= salaries.reduce((sum,value)=>{
            return sum+value;
        },0)
     
     console.log( employees.name + " : " + totalSalary)
    })
     */
    /*
    const products=[
        {name:"Pen", quantity:10,price:5},
        {name:"Notebook", quantity:3,price:20},
        {name:"Pencil", quantity:15,price:2}
    ]

    let total= products.reduce((sum,product)=>{
        return sum+ (product.quantity*product.price)
    },0);
    console.log(total)
    */
   /* const students= [
        {name: "Aisha", marks:85},
         {name: "Rahul", marks:42},
          {name: "Fathima", marks:73},
           {name: "Ali", marks:35}, 
           {name: "sara", marks:90}
    ]
 let newArray= students.filter((student)=>
     student.marks>=50 )
 .map((student)=>{
    return student.name;
 })
console.log(newArray)
*/
/*const students=[
    {name:"Aisha", marks:85},
    {name:"Fathima", marks:73},
    {name:"Ali", marks:35},
    {name:"Sara", marks:90},
    {name:"Rahul", marks:42},
]
let newArray= students.find((student)=>
    student.marks<50
)
console.log(newArray)
*/
/*
const students = [
  {
    name: "Aisha",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    subjects: [
      { name: "Math", marks: 45 },
      { name: "English", marks: 50 },
      { name: "Science", marks: 40 }
    ]
  },
  {
    name: "Fatima",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];
 let result= students.map((student)=>{
    let total = student.subjects.reduce((sum,subject)=>{
        return sum+ subject.marks
    },0)
    let average= total/ student.subjects.length;
    return {
        name: student.name,
        average: average
    };
 })
 .filter((student)=>{
    return student.average>=80
 }
)
console.log(result)
*/
/*
const students = [
  {
    name: "Aisha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    class: "10B",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 80 },
      { name: "Science", marks: 75 }
    ]
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];
 let result= students.map((student)=> {
    return { name: student.name,
        marks: student.subjects[0].marks
    }
 }
).filter((student)=>{
    return student.marks > 85;
})
console.log(result)
*/
/*
const students = [
  {
    name: "Aisha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    class: "10B",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 80 },
      { name: "Science", marks: 75 }
    ]
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];

let total = students.filter((student)=>{
    return student.subjects.every((subject)=>{
        return subject.marks>80
    })
}).map((student)=>{
    return{
        name: student.name,
        class : student.class
    }
})
console.log(total)
*/
const students = [
  {
    name: "Aisha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    class: "10B",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 80 },
      { name: "Science", marks: 75 }
    ]
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];
/*

let total= students.filter((student)=>{
    return student.subjects.some((subject)=>{
        return subject.marks<80
    })
}).map((student)=>{
    return { name:student.name,
        subjects: student.subjects
        .filter((subject)=> subject.marks<80)
        .map((subject)=>subject.name)
    }
})
console.log(total)
*/
const orders = [
  { customer: "Alice", amount: 250 },
  { customer: "Bob", amount: 400 },
  { customer: "Alice", amount: 150 },
  { customer: "Bob", amount: 100 },
  { customer: "Charlie", amount: 300 }
];

let total= orders.reduce((acc,order)=>{
    if(acc[order.customer]){
        acc[order.customer]=acc[order.customer]+order.amount
    } else{
        acc[order.customer]=order.amount
    }
    return acc;

},{})
console.log(total)