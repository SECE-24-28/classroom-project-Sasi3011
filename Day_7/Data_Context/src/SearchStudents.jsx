import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'

const SearchStudents = () => {
  const { search, setSearch } = useContext(DataContext)
  return (
    <div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder='Search Student'
            value={search}
            onChange={(e)=>setSearch(e.target.value)
            }
            />
        </form>
    </div>
  )
}

export default SearchStudents
