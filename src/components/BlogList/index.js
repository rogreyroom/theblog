import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { fetchCommentsData } from '../../redux/comments/commentsActions'
import { fetchUsersData } from '../../redux/users/usersActions'
import PostCard from '../PostCard'

const BlogList = () => {
  const { posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (posts.length > 0) {
      dispatch(fetchCommentsData())
      dispatch(fetchUsersData())
    }
  }, [dispatch, posts])

  if (posts.length === 0) return <h2>Loading...</h2>

  return (
    posts.length > 0 &&
    posts.map((post) => (
      <PostCard id={post.id} title={post.title} key={post.id} />
      // // create separate component and then dispatch the fetch of thumbnail image
      // <Link
      //   to={`blog/${post.id}`}
      //   onClick={() => setPostData(post.id)}
      //   key={post.id}
      // >
      //   <h4>{post.title}</h4>
      // </Link>
    ))
  )
}

export default BlogList
