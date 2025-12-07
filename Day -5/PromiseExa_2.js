const res=fetch("https://jsonplaceholder.typicode.com/users")
          .then(a=>
          {
           return a.json()
          })
           .then(b=>
           {
              console.log(b)
           })
console.log(res)










/*

const res=fetch("https://jsonplaceholder.typicode.com/users")
          .then(res=>
          {
           return res.json()
          })
           .then(user=>
           {
              console.log(user)
           })
console.log(res)
*/