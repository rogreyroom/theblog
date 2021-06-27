import React from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import classes from './index.module.scss'

const CommentForm = ({ post }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const config = {
      method: 'POST',
      body: JSON.stringify({
        postId: parseInt(data.postId, 2),
        name: data.name,
        email: data.email,
        body: data.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments`,
        config,
      )
      const responsData = await response.json()
      console.info('responsData', responsData)
      return responsData
    } catch (e) {
      console.error(e)
      return e
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <input type="hidden" defaultValue={post} {...register('postId')} />

      <input
        {...register('name', { required: true })}
        className={classes.form__input}
        placeholder="name"
      />
      {errors.name && (
        <span className={classes.form__error}>This field is required</span>
      )}

      <input
        {...register('email', { required: true })}
        className={classes.form__input}
        placeholder="email"
      />
      {errors.email && (
        <span className={classes.form__error}>This field is required</span>
      )}

      <textarea
        {...register('body', { required: true })}
        className={classes.form__textarea}
        placeholder="text"
      />
      {errors.body && (
        <span className={classes.form__error}>This field is required</span>
      )}

      <button type="submit" onClick={onSubmit} className={classes.form__button}>
        Comment
      </button>
    </form>
  )
}

CommentForm.propTypes = {
  post: PropTypes.number.isRequired,
}

export default CommentForm
