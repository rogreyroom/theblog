import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { postsActions } from '../../redux/posts/postsSlice'

const BlogList = () => {
  const { posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  const setPostData = (id) => {
    dispatch(postsActions.getPostById(id))
  }

  if (posts.length === 0) return <h2>Loading...</h2>

  return (
    posts.length > 0 &&
    posts.map((post) => (
      <Link
        to={`blog/${post.id}`}
        onClick={() => setPostData(post.id)}
        key={post.id}
      >
        <h4>{post.title}</h4>
      </Link>
    ))
  )
}

export default BlogList
