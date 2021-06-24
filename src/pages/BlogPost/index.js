import React from 'react'
import { useParams } from 'react-router-dom'

const BlogPost = () => {
  const { id } = useParams()
  return <h2>Blog post page - {id}</h2>
}

export default BlogPost
