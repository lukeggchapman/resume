// react-hot-loader must be loaded before react-dom
import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import DevApp from './DevApp'

const HotApp = hot(DevApp)
const rootEl = document.getElementById('react-app')

ReactDOM.render(<HotApp />, rootEl)
