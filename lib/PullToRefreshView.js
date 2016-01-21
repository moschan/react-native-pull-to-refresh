'use strict';

import Styles from './Style'
import Indicator from './Indicator'
import React from 'react-native'

var {
  View,
  ScrollView,
} = React

const INDICATOR_HEIGHT = 40

var PullToRefreshView = React.createClass({
  getInitialState: function() {
    return {
      expand: -INDICATOR_HEIGHT,
      scroll_offset: 0,
      isLoading: false,
      needPull: true,
    }
  },
  getDefaultProps: function() {
    return {
      offset: 100,
      delay: 0,
    }
  },
  _handleScroll(e) {
    var offset = e.nativeEvent.contentOffset.y
    if (!this.state.isLoading) {
      this.setState({scroll_offset: offset})
      this.setState({needPull: offset > -this.props.offset})
    }
  },
  _handleRelease(e) {
    if (this.state.scroll_offset < -this.props.offset) {
      this.setState({isLoading: true})
      this.setState({state: 'laoding'})
      this._expander(true)
      this._handleOnRefresh()
    }
  },
  _delay: function() {
    return new Promise((resolve) => {
      setTimeout(resolve, this.props.delay)
    })
  }, 
  _handleOnRefresh: function() {
    return new Promise((resolve) => {
      Promise.all([
        this.props.onRefresh(resolve),
        this._delay(),
      ])
      .then(() => {
        this._endLoading()
      })
    })
  },
  _endLoading: function() {
    this.setState({
      isLoading:false,
      scroll_offset: 0,
    })
    this._expander(false)
  },
  _expander: function(is_expand) {
    var that = this
    var threshold = -INDICATOR_HEIGHT
    var n = -5

    if (is_expand) {
      threshold = 5
      n = 1
    }

    (function loop() {
        var animation = requestAnimationFrame(loop)
        that.setState({expand: that.state.expand += n})
        if( (is_expand && that.state.expand >= threshold) ||
          (!is_expand && that.state.expand <= threshold) ||
          (is_expand && !that.state.isLoading)) {
          cancelAnimationFrame(animation)
        }
    })()
  },
  render: function() {
    var offset_y = this.state.scroll_offset
    return (
      <View style={{flex:1}}>
        <ScrollView
          onScroll={this._handleScroll}
          onResponderRelease={(evt) => {this._handleRelease(evt)}}
          scrollEventThrottle={50}
          showsVerticalScrollIndicator={false}
          vertical={true}
          style={this.props.style}
        >
        <View style={{top: this.state.expand}} >
          <Indicator
            isLoading={this.state.isLoading}
            needPull={this.state.needPull}
          />
          {this.props.children}
        </View>
        </ScrollView>
      </View>
    )
  }
})

module.exports = PullToRefreshView
