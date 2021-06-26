import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { commentsActions } from '../../redux/comments/commentsSlice'
import { usersActions } from '../../redux/users/usersSlice'
import CommentsList from '../../components/CommentsList'
import { photosActions } from '../../redux/photos/photosSlice'

const BlogPost = () => {
  const { post } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.users)
  const { photo } = useSelector((state) => state.photos)
  const dispatch = useDispatch()

  useEffect(() => {
    if ({}.hasOwnProperty.call(post, 'id')) {
      dispatch(commentsActions.getPostComments(post.id))
      dispatch(usersActions.getUserById(post.userId))
      dispatch(photosActions.getPhotoById(post.id))
    }
  }, [dispatch, post])

  if (!{}.hasOwnProperty.call(post, 'id')) return <h2>Loading...</h2>

  return (
    <>
      <img src={photo.url} alt={photo.title} />
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
