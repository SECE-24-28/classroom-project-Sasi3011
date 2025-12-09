import React from 'react'

const SearchStudents = ({search,setSearch}) => {
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