import React from 'react'
import { Text, Link as PDFLink } from '@react-pdf/renderer'
import FAIcon, { FAIconProps } from 'components/FAIcon'

export type IconLinkProps = FAIconProps & {
  src: string
  children: React.ReactNode
}

const IconLink: React.FC<IconLinkProps> = ({ src, children, ...iconProps }) => (
  <Text>
    <FAIcon {...iconProps} />
    {` `}
    <PDFLink src={src}>{children}</PDFLink>
  </Text>
)

export default IconLink
