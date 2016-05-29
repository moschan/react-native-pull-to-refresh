'use strict'

import React, { PropTypes } from 'react'
import { PullToRefreshViewAndroid, ScrollView } from 'react-native'

export default class PTRViewAndroid extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: false
    }
  }
  _delay () {
    return new Promise((resolve) => {
      setTimeout(resolve, this.props.delay)
    })
  }
  _handleOnRefresh () {
    this.setState({ isLoading: true })
    return new Promise((resolve) => {
      Promise.all([
        this.props.onRefresh(resolve),
        this._delay()
      ])
        .then(() => {
          this._endLoading()
        })
    })
  }
  _endLoading () {
    this.setState({
      isLoading: false
    })
  }
  render () {
    return (
      <PullToRefreshViewAndroid
        refreshing={this.state.isLoading}
        onRefresh={this._handleOnRefresh.bind(this)}
        colors={this.props.colors}
        progressBackgroundColor={this.props.progressBackgroundColor}
        style={[{flex: 1}, this.props.style]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
        >
          {this.props.children}
        </ScrollView>
      </PullToRefreshViewAndroid>
    )
  }
}

PTRViewAndroid.defaultProps = {
  colors: ['#000'],
  progressBackgroundColor: '#fff',
  offset: 100,
  delay: 0
}

PTRViewAndroid.propTypes = {
  ...PullToRefreshViewAndroid.propTypes,
  delay: PropTypes.number,
  onRefresh: PropTypes.func,
  style: PropTypes.object,
  children (props, propName, componentName) {
  }
}

