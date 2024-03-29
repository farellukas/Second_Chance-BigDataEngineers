import React, { useState, useEffect } from 'react'
import { Button, CardActionArea, CardActions,Box } from '@mui/material';
import "./Comments.css"
function Comments() {
  const [messages, setMessages] = useState([])
  const [newComment, setNewComment] = useState("")
  const [commentDate, setCommentDate] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/api/comments')
      .then(res => res.json())
      .then(data => setMessages(data))
      .then(() => setIsLoading(false))
      .catch(err => console.log(err))
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await setCommentDate(Date.now().toString())
    await fetch(`http://localhost:4000/api/new_comment?timestamp=${commentDate}&text=${newComment}`, {method: "POST"}).catch(err => console.log(err))
    await setMessages(prevMessages => [...prevMessages, { timestamp: commentDate, text: newComment }])
    await setNewComment("")
  }

  const handleChange = e => {
    setNewComment(e.target.value)
  }

  return (
    <div className="comment-wrapper">
      <div className='messages'>
        {!isLoading && messages.map(message => ((
          <h1>{message.text}</h1>
        )))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className='boxes'>
        <input type="text" value={newComment} className="viewBox" onChange={handleChange} />
        <input type="submit" className='submitBox' value="Send" />
        </div>
      </form>
    </div>
  )
}

export default Comments