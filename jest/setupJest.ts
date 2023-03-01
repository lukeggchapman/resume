import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'snapshot-diff/extend-expect'

configure({ adapter: new (Adapter as any)() })
