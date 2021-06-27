import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { fetchCommentsData } from '../../redux/comments/commentsActions'
import { fetchUsersData } from '../../redux/users/usersActions'
import PostCard from '../PostCard'
import classes from './index.module.scss'

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
    <section className={classes.posts}>
      <h2 className={classes.posts__title}>
        Blog posts <span>/ {posts.length} /</span>
      </h2>
      {posts.length > 0 && (
        <ul className={classes.posts__list}>
          {posts.map((post) => (
            <li className={classes.posts__item} key={post.id}>
              <PostCard id={post.id} title={post.title} key={post.id} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default BlogList
