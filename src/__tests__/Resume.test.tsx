import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'components/__mocks__/typographyMock'
import Document from '../Resume'

jest.mock('utils/hastToPDF')
jest.mock('content/education')
jest.mock('content/experience')
jest.mock('content/skills')

describe('Document', () => {
  const renderResume = () => render(<Document />)

  it('renders correctly', () => {
    const { container } = renderResume()

    expect(container.cloneNode(true)).toMatchSnapshot()
  })
})
