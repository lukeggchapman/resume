import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import Resume from '../Resume'

import createPDF from '../createPDF'

jest.mock('react', () => ({ createElement: jest.fn() }))
jest.mock('@react-pdf/renderer', () => ({ render: jest.fn() }))
jest.mock('../Resume', () => 'Resume')

const renderMock = ReactPDF.render as jest.Mock
const createElementMock = React.createElement as jest.Mock

describe('createPDF', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('calls React.createElement with Resume', () => {
    createPDF('some/file.pdf')

    expect(createElementMock).toHaveBeenCalledWith(Resume)
  })

  it('calls ReactPDF.render with Resume and filepath', () => {
    const filePath = 'some/file.pdf'
    const mockElement = 'MockElement'

    createElementMock.mockReturnValue(mockElement)

    createPDF(filePath)

    expect(renderMock).toHaveBeenCalledWith(mockElement, filePath)
  })
})
