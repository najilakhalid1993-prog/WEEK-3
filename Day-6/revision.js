const employees=[
    {name: "Asha",
        age:35,
        Department:"Development",
        salary:50000,
        skills:["HTML, CSS, JavaScript"]

    },
     {name: "Veena",
        age:35,
        Department:"Design",
        salary:30000,
        skills:["Photoshop", "figma","UI"]

    },
     {name: "Monica",
        age:35,
        Department:"Development",
        salary:50000,
        skills:["Python", "django"]

    },
     {name: "Raju",
        age:35,
        Department:"Marketing",
        salary:50000,
        skills:["SEO", "Avertising","Accounting"]

    }
]
const{ name,age, Department}= employees[3]
console.log(age)
const[ firstskill, secondskill, thirdskill]= employees[1].skills;
console.log(firstskill)

const totalSalary= employees.reduce((sum,employee)=>{
    return sum+employee.salary
},0)
console.log(totalSalary)

function showEmployee(employee){
    console.log("Employee:",employee.name)
}
employees.forEach(showEmployee);
console.log(employees[0].address?.city)
const city= employees[0].address?.city??"City not available";
console.log(city)
 const shallowEmployee= {...employees[0]}
 shallowEmployee.skills.push("mongoDB")
 console.log("Original:", employees[0].skills)
 console.log("Shallow Copy:", shallowEmployee.skills)