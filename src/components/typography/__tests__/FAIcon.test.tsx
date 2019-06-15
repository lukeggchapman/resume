import React from 'react'
import { shallow } from 'enzyme'

import FAIcon, { FAIconProps, styles } from '../FAIcon'

const baseProps: FAIconProps = {
  icon: 'envelope',
}

describe('FAIcon', () => {
  it('renders correctly', () => {
    expect(shallow(<FAIcon {...baseProps} far />)).toMatchSnapshot()
  })

  it('supports fab styles', () => {
    const faIcon = shallow(<FAIcon {...baseProps} fab />)

    expect(faIcon.prop('style')).toContain(styles.fab)
  })

  it('supports far styles', () => {
    const faIcon = shallow(<FAIcon {...baseProps} far />)

    expect(faIcon.prop('style')).toContain(styles.far)
  })

  it('supports fas styles', () => {
    const faIcon = shallow(<FAIcon {...baseProps} fas />)

    expect(faIcon.prop('style')).toContain(styles.fas)
  })
})
