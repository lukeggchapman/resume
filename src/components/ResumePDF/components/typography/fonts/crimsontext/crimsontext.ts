import { Font } from '@react-pdf/renderer'

import crimsonTextBold from './CrimsonText-Bold.ttf'
import crimsonTextBoldItalic from './CrimsonText-BoldItalic.ttf'
import crimsonTextItalic from './CrimsonText-Italic.ttf'
import crimsonTextRegular from './CrimsonText-Regular.ttf'
import crimsonTextSemiBold from './CrimsonText-SemiBold.ttf'
import crimsonTextSemiBoldItalic from './CrimsonText-SemiBoldItalic.ttf'

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
