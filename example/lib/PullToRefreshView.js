'use strict';

import Styles from './Style'

var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window');

var React = require('react-native');
var {
  View,
  ScrollView,
  ActivityIndicatorIOS,
  Text,
} = React;

var PullToRefreshView = React.createClass({
  getInitialState: function() {
    return {
      offset_y: true,
      scroll_offset: 0,
      indicator_height: 0,
      isLoading: false,
      willRefresh: true,
    };
  },
  getDefaultProps: function() {
    return {
      offset: 120,
    };
  },
  _handleScroll(e) {
    var offset = e.nativeEvent.contentOffset.y
    if (offset < 0 && !this.state.isLoading) {
      console.log(this.state.scroll_offset);
      this.setState({scroll_offset: offset > -this.props.offset ? offset : -this.props.offset});
    }
  },

  _handleRelease(e) {
    var PULLDOWN_DISTANCE = 100;
    if (this.state.scroll_offset < -PULLDOWN_DISTANCE) {
      this.setState({isLoading: true});
      this.setState({state: 'laoding'});
      setTimeout(this._handleOnRefresh, 2000);
    }
  },



  render: function() {
    var offset_y = this.state.scroll_offset;
    return (
      <View style={{flex:1}}>
        <View style={{
          marginTop: this.state.isLoading ? 70 : 0,
          position: this.state.isLoading ? 'relative' : 'absolute',
          top: this.state.isLoading ? 0 : 70,
          justifyContent: 'center',
          alignItems: 'center',
          left:0,
          right:0,
          transform: [{'translate':[0,0,1]}] ,
          backgroundColor: 'rgba(0,0,0,0)'
        }}>

          <ActivityIndicatorIOS
            animating={this.state.isLoading}
            hidesWhenStopped={false}
            size="large"
            style={{transform: [
              {scaleX:-offset_y*0.01},{scaleY:-offset_y*0.01},
              ],
            }}

          />
        </View>
        <ScrollView
          onScroll={this._handleScroll}
          onResponderRelease={(evt) => {this._handleRelease(evt)}}
          scrollEventThrottle={50}
          showsVerticalScrollIndicator={false}
          vertical={true}
          style={[
            this.props.style,
            {marginTop: this.state.isLoading ? 0 : 60, flex:1,},
          ]}
        >
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
});

module.exports = PullToRefreshView
