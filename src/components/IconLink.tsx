import React from 'react'
import { Text, Link as PDFLink } from '@react-pdf/renderer'
import FAIcon, { FAIconProps } from 'components/FAIcon'

export interface IconLinkProps {
  src: string
  children: React.ReactNode
}

const IconLink: React.FC<IconLinkProps & FAIconProps> = ({
  src,
  children,
  ...iconProps
}) => (
  <Text>
    <FAIcon {...iconProps} />
    {` `}
    <PDFLink src={src}>{children}</PDFLink>
  </Text>
)

export default IconLink
