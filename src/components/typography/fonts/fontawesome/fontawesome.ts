import { Font } from '@react-pdf/renderer'

import faBrands from './fa-brands-400.ttf'
import faRegular from './fa-regular-400.ttf'
import faSolid from './fa-solid-900.ttf'

Font.register({
  family: 'Font Awesome 5 Free',
  src: faRegular,
  fonts: [
    { src: faBrands, fontStyle: 'normal', fontWeight: 'bold' },
    { src: faRegular, fontStyle: 'normal', fontWeight: 'normal' },
    { src: faSolid, fontStyle: 'normal', fontWeight: 'heavy' },
  ],
})
