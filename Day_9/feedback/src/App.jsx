import { useState, useEffect } from 'react'
import api from './api/Feedback'
import Home from './Home'
import './App.css'

function App() {
  const [post, setPost] = useState([])
  const [search, setSearch] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  // Date formatting function
  const formatDate = () => {
    const date = new Date();

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  };

  // Fetch all feedback
  useEffect(() => {
    const fetData = async () => {
      const response = await api.get("/feedback")
      setPost(response.data)
    }
    fetData()
  }, [])

  // Add new feedback
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    const newPost = {
      id: String(post.length + 1),
      title,
      datatime: formatDate(),
      body
    };

    const response = await api.post("/feedback", newPost);

    setPost([...post, response.data]);

    setTitle("");
    setBody("");
  };

  return (
    <div className="container">
      <h1 className="title">Feedback List</h1>

      {/* Add new feedback */}
      <form onSubmit={handleSubmit} className="formBox">
        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="inputBox"
        />

        <textarea
          placeholder="Enter feedback..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="inputBox"
        />

        <button className="btn">Add Feedback</button>
      </form>

      {/* Search */}
      <input
        className="searchBox"
        type="text"
        placeholder="Search feedback..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Home post={post} search={search} />
    </div>
  );
}

export default App;
