import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { commentsActions } from '../../redux/comments/commentsSlice'
import { usersActions } from '../../redux/users/usersSlice'
import CommentsList from '../../components/CommentsList'

const BlogPost = () => {
  const { post } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    if ({}.hasOwnProperty.call(post, 'id')) {
      dispatch(commentsActions.getPostComments(post.id))
      dispatch(usersActions.getUserById(post.userId))
    }
  }, [dispatch, post])

  if (!{}.hasOwnProperty.call(post, 'id')) return <h2>Loading...</h2>

  return (
    <>
      <span>{user.name}</span>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <CommentsList />
      </div>
    </>
  )
}

export default BlogPost
