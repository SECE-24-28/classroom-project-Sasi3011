import React, { useContext } from 'react'
import Student from './Student'
import { DataContext } from './context/DataContext'

const Body = () => {
  const { filteredStuList } = useContext(DataContext)
  return (
    <div>
      <ul>
      {
           filteredStuList.map((stu)=>
            <Student  key={stu.id} stu={stu} />
          )
      }
      </ul>
    </div>
  )
}

export default Body
