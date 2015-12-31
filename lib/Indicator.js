'use strict';

import Style from './Style'
import React from 'react-native'

var {
  View,
  ActivityIndicatorIOS,
  Image,
} = React

var Indicator = React.createClass({
  render: function() {
    var display_object = ''
    if (this.props.needPull) {
      display_object = (
        <Image source={require('./icon/arrow.png')} />
      )
    } else {
      display_object = (
        <ActivityIndicatorIOS
          animating={true}
          size="large"
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
