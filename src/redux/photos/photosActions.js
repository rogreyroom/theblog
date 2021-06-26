import { photosActions } from './photosSlice'

export const fetchPhotosData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')

    if (!response.ok) {
      throw new Error('Photos are not set!')
    }
    const data = await response.json()
    return data
  }

  try {
    const photosData = await fetchData()
    dispatch(
      photosActions.setPhotos({
        photos: photosData || [],
      }),
    )
  } catch (error) {
    dispatch(
      photosActions.setError({
        error:
          {
            status: error,
            title: 'Error!',
            message: 'Fetching photos failed!',
          } || {},
      }),
    )
  }
}
