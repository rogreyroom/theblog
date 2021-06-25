import { postsActions } from './postsSlice'

export const fetchPostsData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=25',
    )

    if (!response.ok) {
      throw new Error('Posts are not set!')
    }
    const data = await response.json()
    return data
  }

  try {
    const postsData = await fetchData()
    dispatch(
      postsActions.setPosts({
        posts: postsData || [],
      }),
    )
  } catch (error) {
    dispatch(
      postsActions.setError({
        error:
          {
            status: error,
            title: 'Error!',
            message: 'Fetching posts failed!',
          } || {},
      }),
    )
  }
}
