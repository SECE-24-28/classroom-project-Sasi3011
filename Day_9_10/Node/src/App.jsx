import { useState, useEffect } from 'react'
import './App.css'
import api from "./api/Courses"

function App() {
  const [CList, setCList] = useState([])

  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await api.get("/courses")
        setCList(response.data)
        // console.log("Data: ", response.data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
    fetData()
  }, [])

  return (
    <>
      {
        CList.map((course) => (
          <p key={course.id}>
            {course.id} - {course.name} - {course.level}
          </p>
        ))
      }
    </>
  )
}

export default App
