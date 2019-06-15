import idObj from 'identity-obj-proxy'

jest.doMock('../typography', () => ({
  __esModule: true,
  default: idObj,
  FAIcon: 'FAIcon',
}))
