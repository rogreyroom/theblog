import React from 'react'
import { useSelector } from 'react-redux'
import CommentCard from '../CommentCard'
import classes from './index.module.scss'

const CommentsList = () => {
  const postComments = useSelector((state) => state.comments.postComments)

  if (postComments.length === 0) return <h2>Loading...</h2>

  return (
    <section className={classes.comments}>
      <h2 className={classes.comments__title}>
        Comments <span>/ {postComments.length} /</span>
      </h2>
      {postComments.length > 0 && (
        <ul className={classes.comments__list}>
          {postComments.map((comment) => (
            <li className={classes.comments__item} key={comment.id}>
              <CommentCard name={comment.name} body={comment.body} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default CommentsList
