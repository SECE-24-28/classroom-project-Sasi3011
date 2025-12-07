const res = fetch("https://jsonplaceholder.typicode.com/users")
.then(a=>{
    return a.json();
})
.then(b=>{
    console.log(b)
})
console.log(res)