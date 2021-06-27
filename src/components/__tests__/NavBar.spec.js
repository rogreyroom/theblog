/**
 * @jest-environment jsdom
 */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import NavBar from '../NavBar'

describe('NavBar component', () => {
  let element
  beforeEach(() => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>,
    )
    element = container
  })

  it('renders the component', () => {
    expect(element).toMatchSnapshot()
  })

  it('component contains text "TheBlog" and "home"', () => {
    expect(screen.getByText(/the/i)).toHaveTextContent('TheBlog')
    expect(screen.getByText(/home/i)).toHaveTextContent('home')
  })

  it('renders two link tags', () => {
    const aTag = element.querySelectorAll('a')
    expect(aTag).toHaveLength(2)
  })

  afterAll(cleanup)
})
