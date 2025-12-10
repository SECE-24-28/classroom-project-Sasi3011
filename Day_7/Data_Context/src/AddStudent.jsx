import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'

const AddStudent = () => {
  const { newstu, setNewStu, handleSubmit } = useContext(DataContext)
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='New Student'
                               value={newstu}
                               onChange={(e)=>setNewStu(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddStudent
