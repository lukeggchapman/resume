import typography from '../typography'

describe('PDF typography', () => {
  it('styles are unchanged', () => {
    expect(typography).toMatchSnapshot()
  })
})
