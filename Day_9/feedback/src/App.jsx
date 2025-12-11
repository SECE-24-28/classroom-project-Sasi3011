import { useState, useEffect } from 'react'
import api from './api/Feedback'
import Home from './Home'
import './App.css'

function App() {
  const [post, setPost] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetData = async () => {
      const response = await api.get("/feedback")
      setPost(response.data)
    }
    fetData()
  }, [])

  return (
    <div className="container">
      <h1 className="title">Feedback List</h1>

      <input
        className="searchBox"
        type="text"
        placeholder="Search feedback..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Home post={post} search={search} />
    </div>
  )
}

export default App
