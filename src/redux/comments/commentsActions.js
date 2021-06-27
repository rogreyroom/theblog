import { commentsActions } from './commentsSlice'

export const fetchCommentsData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments',
    )

    if (!response.ok) {
      throw new Error('Comments are not set!')
    }
    const data = await response.json()
    return data
  }

  try {
    const commentsData = await fetchData()
    dispatch(
      commentsActions.setComments({
        comments: commentsData || [],
      }),
    )
  } catch (error) {
    dispatch(
      commentsActions.setError({
        error:
          {
            status: error,
            title: 'Error!',
            message: 'Fetching comments failed!',
          } || {},
      }),
    )
  }
}
