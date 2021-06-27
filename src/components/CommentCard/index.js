import React from 'react'
import PropTypes from 'prop-types'
import classes from './index.module.scss'

const CommentCard = ({ name, body }) => (
  <section className={classes.card}>
    <h4 className={classes.card__title}>{name}</h4>
    <p className={classes.card__text}>{body}</p>
  </section>
)

CommentCard.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default CommentCard
