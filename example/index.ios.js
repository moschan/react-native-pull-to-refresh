/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var PTRView = require('./lib/index')

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var PullToRefreshProject = React.createClass({
  _refresh: function() {
    return new Promise((resolve) => {
      setTimeout(()=>{resolve()}, 1000)
    });
  },
  render: function() {
    return (
      <PTRView onRefresh={this._refresh} >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </PTRView>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // backgroundColor: 'rgba(0,0,0,0)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PullToRefreshProject', () => PullToRefreshProject);
