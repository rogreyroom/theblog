/**
 * @jest-environment jsdom
 */
import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import CommentCard from '../CommentCard'

describe('CommentCard component', () => {
  let element
  beforeEach(() => {
    const { container } = render(
      <CommentCard name="John" body="Some nice comment about the post" />,
    )
    element = container
  })

  it('renders the component', () => {
    expect(element).toMatchSnapshot()
  })

  it('component contains text "John"', () => {
    expect(screen.getByText(/john/i)).toHaveTextContent('John')
  })

  it('component contains text "Some nice comment about the post"', () => {
    expect(screen.getByText(/comment/i)).toHaveTextContent(
      'Some nice comment about the post',
    )
  })

  afterAll(cleanup)
})
