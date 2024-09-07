import React, { useState } from 'react'
const post = []
export default function ToDoList() {
    const [inputValue, setInputValue] = useState('')
     const [posts, setPosts] = useState(post)


  return (
    <div>
      {posts.map((posted, index) =>(
        <div key={index} >{posted}</div>
      ) )}
      <input 
     type="text"
     placeholder='Text input'
     value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={()=>{
        setPosts([...posts, inputValue])
        setInputValue('')
      }} >add post</button>
      <button onClick={()=>{
        setPosts([])
      }} >delete post </button>
     
    </div>
  )
}
