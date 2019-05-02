import { Font } from '@react-pdf/renderer'

import oswaldExtraLight from './Oswald-ExtraLight.ttf'
import oswaldLight from './Oswald-Light.ttf'
import oswaldMedium from './Oswald-Medium.ttf'
import oswaldRegular from './Oswald-Regular.ttf'
import oswaldSemiBold from './Oswald-SemiBold.ttf'

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
