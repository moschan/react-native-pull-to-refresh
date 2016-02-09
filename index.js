import { Platform } from 'react-native'
import PTRViewiOS from './lib/PullToRefreshViewiOS.js'
import PTRViewAndroid from './lib/PullToRefreshViewAndroid.js'

var PTRView = false

if (Platform.OS === 'android') {
  PTRView = PTRViewAndroid
} else {
  PTRView = PTRViewiOS
}

module.exports = PTRView

