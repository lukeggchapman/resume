import Typography from 'typography'
import elkGlenTheme from 'typography-theme-elk-glen'

import typography, { rhythm } from '../typography'

jest.mock('typography', () =>
  jest.fn().mockImplementation(() => ({ rhythm: 'rhythmTest' }))
)
jest.mock('typography-theme-elk-glen', () => 'elkGlenThemeMock')

describe('typography util', () => {
  it('initialises typography with elk glen theme', () => {
    expect(Typography).toHaveBeenCalledWith(elkGlenTheme)
  })

  it('exports the initialised typography as default', () => {
    expect(typography).toEqual(new Typography({}))
  })

  it('exports rhythm from typography as named export', () => {
    expect(rhythm).toEqual('rhythmTest')
  })
})
