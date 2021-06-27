/**
 * @jest-environment jsdom
 */
import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import Post from '../Post'
import store from '../../redux/store'

describe('PostCard component', () => {
  let element
  beforeEach(() => {
    const { container } = render(
      <Provider store={store}>
        <Post
          userName="John"
          photoUrl="https://via.placeholder.com/600/92c952"
          photoTitle="placeholder photo"
          postTitle="Awesome blog title"
          postBody="Some cool blog text"
        />
      </Provider>,
    )
    element = container
  })

  it('renders the component', () => {
    expect(element).toMatchSnapshot()
  })

  it('component contains user name "John"', () => {
    expect(screen.getByText(/john/i)).toHaveTextContent('John')
  })

  it('component contains photo url "https://via.placeholder.com/600/92c952"', () => {
    expect(element.querySelector('img').src).toEqual(
      'https://via.placeholder.com/600/92c952',
    )
  })

  it('component contains post title "Awesome blog title"', () => {
    expect(screen.getByText(/awesome/i)).toHaveTextContent('Awesome blog title')
  })

  it('component contains post body "Some cool blog text"', () => {
    expect(screen.getByText(/cool/i)).toHaveTextContent('Some cool blog text')
  })

  it('component contains svg icon', () => {
    expect(element.querySelector('svg')).toBeInTheDocument()
  })

  afterAll(cleanup)
})
