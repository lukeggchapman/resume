import { Font } from '@react-pdf/renderer'

import oswaldExtraLight from 'fonts/oswald/Oswald-ExtraLight.ttf'
import oswaldLight from 'fonts/oswald/Oswald-Light.ttf'
import oswaldMedium from 'fonts/oswald/Oswald-Medium.ttf'
import oswaldRegular from 'fonts/oswald/Oswald-Regular.ttf'
import oswaldSemiBold from 'fonts/oswald/Oswald-SemiBold.ttf'

Font.register({
  family: 'Oswald',
  src: oswaldRegular,
  fonts: [
    { src: oswaldExtraLight, fontStyle: 'normal', fontWeight: 'ultralight' },
    { src: oswaldLight, fontStyle: 'normal', fontWeight: 'light' },
    { src: oswaldMedium, fontStyle: 'normal', fontWeight: 'medium' },
    { src: oswaldRegular, fontStyle: 'normal', fontWeight: 'normal' },
    { src: oswaldSemiBold, fontStyle: 'normal', fontWeight: 'semibold' },
  ],
})
