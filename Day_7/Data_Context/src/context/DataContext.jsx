import { createContext, useState, useMemo } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [stuList, setStuList] = useState([
    {id:1,sname:"Jack",fee:true},
    {id:2,sname:"Smith",fee:false},
    {id:3,sname:"Victor",fee:true}
  ])

  const [newstu,setNewStu] = useState('')
  const [search,setSearch] = useState('')

  const handleDelete = (id) => {
    const newList = stuList.filter((stu)=>stu.id!==id)
    setStuList(newList)
  }

  const handleChange = (id) => {
    const newList = stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
    setStuList(newList)
  }

  const addItem = (item) => {
    const sz = stuList.length-1
    const nid = (stuList.length)?(stuList[sz].id+1):(1)
    const newObj = {id:nid,sname:item,fee:false}
    const newList = [...stuList,newObj]
    setStuList(newList)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newstu.trim()) return
    addItem(newstu.trim())
    setNewStu('')
  }

  const filteredStuList = useMemo(() =>
    stuList.filter((stu)=> stu.sname.toLowerCase().includes(search.toLowerCase()))
  ,[stuList, search])

  const value = {
    stuList,
    setStuList,
    newstu,
    setNewStu,
    search,
    setSearch,
    handleDelete,
    handleChange,
    addItem,
    handleSubmit,
    filteredStuList
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
