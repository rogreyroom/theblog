import React from 'react'
import { useSelector } from 'react-redux'

const CommentsList = () => {
  const postComments = useSelector((state) => state.comments.postComments)

  if (postComments.length === 0) return <h2>Loading...</h2>

  return (
    <>
      <h2>Comments - {postComments.length}</h2>
      {postComments.length > 0 &&
        postComments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
    </>
  )
}

export default CommentsList
