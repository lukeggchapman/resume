import { Font } from '@react-pdf/renderer'

import crimsonTextBold from 'fonts/crimsontext/CrimsonText-Bold.ttf'
import crimsonTextBoldItalic from 'fonts/crimsontext/CrimsonText-BoldItalic.ttf'
import crimsonTextItalic from 'fonts/crimsontext/CrimsonText-Italic.ttf'
import crimsonTextRegular from 'fonts/crimsontext/CrimsonText-Regular.ttf'
import crimsonTextSemiBold from 'fonts/crimsontext/CrimsonText-SemiBold.ttf'
import crimsonTextSemiBoldItalic from 'fonts/crimsontext/CrimsonText-SemiBoldItalic.ttf'

Font.register({
  family: 'Crimson Text',
  src: crimsonTextRegular,
  fonts: [
    { src: crimsonTextBold, fontStyle: 'normal', fontWeight: 'bold' },
    { src: crimsonTextBoldItalic, fontStyle: 'italic', fontWeight: 'bold' },
    { src: crimsonTextItalic, fontStyle: 'italic', fontWeight: 'normal' },
    { src: crimsonTextRegular, fontStyle: 'normal', fontWeight: 'normal' },
    { src: crimsonTextSemiBold, fontStyle: 'normal', fontWeight: 'semibold' },
    {
      src: crimsonTextSemiBoldItalic,
      fontStyle: 'italic',
      fontWeight: 'semibold',
    },
  ],
})
