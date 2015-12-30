'use strict';

import Styles from './Style'

var React = require('react-native');
var {
  View,
  ActivityIndicatorIOS,
} = React;

var Indicator = React.createClass({
  render: function() {
    return (
      <View style={[
        styles.IndicatorWrap,
        !this.props.is_loading && {opacity: 0, left: 999}
      ]}>
        <ActivityIndicatorIOS
          animating={this.props.is_loading}
          size="large"
        />
      </View>
    );
  }
});

module.exports = Indicator
