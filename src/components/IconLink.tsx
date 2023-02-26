import React from 'react'
import { Text, Link as PDFLink } from '@react-pdf/renderer'
import FAIcon, { FAIconProps } from 'components/FAIcon'

export type IconLinkProps = FAIconProps & {
  src: string
  children: React.ReactNode
}

function IconLink({ src, children, ...iconProps }: IconLinkProps) {
  return (
    <Text>
      <FAIcon {...iconProps} />
      {` `}
      <PDFLink src={src}>{children}</PDFLink>
    </Text>
  )
}

export default IconLink
