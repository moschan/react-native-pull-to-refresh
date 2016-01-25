'use strict'

import Style from './Style'
import React from 'react-native'

var {
  View,
  ActivityIndicatorIOS,
  Image,
  PropTypes
} = React

var Indicator = React.createClass({
  propTypes: {
    needPull: PropTypes.bool
  },
  render: function () {
    var display_object = ''
    if (this.props.needPull) {
      display_object = (
        <Image source={require('./icon/arrow.png')} style={{width: 36, height: 36}}/>
      )
    } else {
      display_object = (
        <ActivityIndicatorIOS
          size='large'
        />
      )
    }
    return (
      <View style={Style.IndicatorWrap}>
        {display_object}
      </View>
    )
  }
})

module.exports = Indicator
