let employee=[{ena:"Arun",mob:111},
              {ena:"Ajay",mob:112},
              {ena:"Bala",mob:113},
              {ena:"Bharath",mob:211},
              {ena:"Chandru",mob:212},
              {ena:"Dinesh",mob:213}
            ]
let newEmp=employee.filter((emp)=>
{
   return emp.ena.includes("A")
})
console.log(newEmp)