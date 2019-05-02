import { Font } from '@react-pdf/renderer'

import ptSansWebBold from './PT_Sans-Web-Bold.ttf'
import ptSansWebBoldItalic from './PT_Sans-Web-BoldItalic.ttf'
import ptSansWebItalic from './PT_Sans-Web-Italic.ttf'
import ptSansWebRegular from './PT_Sans-Web-Regular.ttf'

Font.register({
  family: 'PT Sans',
  src: ptSansWebRegular,
  fonts: [
    { src: ptSansWebBold, fontStyle: 'normal', fontWeight: 'bold' },
    { src: ptSansWebBoldItalic, fontStyle: 'italic', fontWeight: 'bold' },
    { src: ptSansWebItalic, fontStyle: 'italic', fontWeight: 'normal' },
    { src: ptSansWebRegular, fontStyle: 'normal', fontWeight: 'normal' },
  ],
})
