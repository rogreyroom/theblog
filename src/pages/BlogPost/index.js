import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { commentsActions } from '../../redux/comments/commentsSlice'
import { usersActions } from '../../redux/users/usersSlice'
import { photosActions } from '../../redux/photos/photosSlice'
import Post from '../../components/Post'
import CommentForm from '../../components/CommentForm'
import CommentsList from '../../components/CommentsList'

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

  if (
    !{}.hasOwnProperty.call(post, 'id') ||
    !{}.hasOwnProperty.call(user, 'name')
  )
    return <h2>Loading...</h2>

  return (
    <>
      <Post
        userName={user.name}
        photoUrl={photo.url}
        photoTitle={photo.title}
        postTitle={post.title}
        postBody={post.body}
      />
      <CommentForm post={post.id} />
      <CommentsList />
    </>
  )
}

export default BlogPost
