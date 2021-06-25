import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { commentsActions } from '../../redux/comments/commentsSlice'
import CommentsList from '../../components/CommentsList'

const BlogPost = () => {
  const { post } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if ({}.hasOwnProperty.call(post, 'id')) {
      dispatch(commentsActions.getPostComments(post.id))
    }
  }, [dispatch, post])

  if (!{}.hasOwnProperty.call(post, 'id')) return <h2>Loading...</h2>

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <CommentsList />
      </div>
    </>
  )
}

export default BlogPost
