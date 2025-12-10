import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'

const Student = ({stu}) => {
  const { handleChange, handleDelete } = useContext(DataContext)
  return (
    <div>
          <li key={stu.id}>
            <input type="checkbox" checked={stu.fee}
                                    onChange={()=>handleChange(stu.id)}
            />
            <label>{stu.sname}</label>
            <button onClick={()=>handleDelete(stu.id)}>Delete</button>
          </li>
    </div>

  )
}

export default Student
