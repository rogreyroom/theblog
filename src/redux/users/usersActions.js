import { usersActions } from './usersSlice'

export const fetchUsersData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.ok) {
      throw new Error('Users are not set!')
    }
    const data = await response.json()
    return data
  }

  try {
    const usersData = await fetchData()
    dispatch(
      usersActions.setUsers({
        users: usersData || [],
      }),
    )
  } catch (error) {
    dispatch(
      usersActions.setError({
        error:
          {
            status: error,
            title: 'Error!',
            message: 'Fetching users failed!',
          } || {},
      }),
    )
  }
}
