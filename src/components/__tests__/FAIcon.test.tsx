import React from 'react'
import { render } from '@testing-library/react'

import FAIcon, { FAIconPropsCommon, styles } from '../FAIcon'

const baseProps: FAIconPropsCommon = {
  icon: 'envelope',
}

describe('FAIcon', () => {
  const extractPdfStyle = (element: HTMLElement) => {
    return JSON.parse(
      (element.firstChild as HTMLElement | null)?.dataset.style ?? '{}'
    )
  }

  it('supports fab styles', () => {
    const faIcon = render(<FAIcon {...baseProps} fab />)

    expect(extractPdfStyle(faIcon.container)).toContainEqual(styles.fab)
  })

  it('supports far styles', () => {
    const faIcon = render(<FAIcon {...baseProps} far />)

    expect(extractPdfStyle(faIcon.container)).toContainEqual(styles.far)
  })

  it('supports fas styles', () => {
    const faIcon = render(<FAIcon {...baseProps} fas />)

    expect(extractPdfStyle(faIcon.container)).toContainEqual(styles.fas)
  })
})
