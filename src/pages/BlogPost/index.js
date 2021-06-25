import React from 'react'
import { useSelector } from 'react-redux'

const BlogPost = () => {
  const { post } = useSelector((state) => state.posts)

  if (!{}.hasOwnProperty.call(post, 'id')) return <h2>Loading...</h2>

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}

export default BlogPost
