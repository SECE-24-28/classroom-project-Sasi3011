import { useState } from 'react'

import './App.css'
import AddStudent from './AddStudent'
import SearchStudents from './SearchStudents'
import Body from './Body'

function App() 
{
    const [stuList,setStuList]=useState([
      {id:1,sname:"Jack",fee:true},
      {id:2,sname:"Smith",fee:false},
      {id:3,sname:"Victor",fee:true}
    ])

    const handleDelete=(id)=>
    {
      const newList=stuList.filter((stu)=>stu.id!==id)
      setStuList(newList)
    }
    const handleChange=(id)=>
    {
      const newList=stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
      setStuList(newList)
    }
   const addItem=(item)=>
   {
    const sz=stuList.length-1;
     const nid=(stuList.length)?(stuList[sz].id+1):(1)
     const newObj={id:nid,sname:item,fee:false}
     const newList=[...stuList,newObj]
     setStuList(newList)
   }
   const handleSubmit=(e)=>
   {
    e.preventDefault()
    addItem(newstu)
    setNewStu('')
   }
    const [newstu,setNewStu]=useState('')
    const [search,setSearch]=useState('')
  return (
    <>
       <h1>Students List</h1>
       <AddStudent  newstu={newstu}
                    setNewStu={setNewStu}
                    handleSubmit={handleSubmit}
       />

       <SearchStudents search={search}
                       setSearch={setSearch} /> 
       

       <Body stuList={stuList.filter((stu)=>
        stu.sname.toLowerCase().includes(search.toLowerCase())
       )}
              handleChange={handleChange}
              handleDelete={handleDelete} />
    </>
  )
}

export default App