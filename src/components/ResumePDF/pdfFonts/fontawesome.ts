import { Font } from '@react-pdf/renderer'

import faBrands from 'fonts/fontawesome/fa-brands-400.ttf'
import faRegular from 'fonts/fontawesome/fa-regular-400.ttf'
import faSolid from 'fonts/fontawesome/fa-solid-900.ttf'

Font.register({
  family: 'Font Awesome 5 Free',
  src: faRegular,
  fonts: [
    { src: faBrands, fontStyle: 'normal', fontWeight: 'normal' },
    { src: faRegular, fontStyle: 'normal', fontWeight: 'normal' },
    { src: faSolid, fontStyle: 'normal', fontWeight: 'heavy' },
  ],
})
