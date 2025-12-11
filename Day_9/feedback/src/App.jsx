import React from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import api from './api/Feedback'
function App() {
  const[post,setPost]=useState([])

  useEffect(()=>{
    const fetData=async()=>{
      const response=await api.get("/feedback")
      console.log(response.data)
      setPost(response.data)  
    }
    fetData();
  },[])
  return (
    <>
      {
        post.map((post)=>(
          <p key={post.id}>
            {post.id} - {post.title} - {post.timedate} - {post.body}
          </p>
        ))
      }
    </>
  )
}

export default App
