/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var PTRView = require('react-native-pull-to-refresh')

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
      setTimeout(()=>{resolve()}, 2000)
    });
  },
  render: function() {
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>PullToRefreshView Demo</Text>
        </View>
        <PTRView
          style={{backgroundColor:'#F5FCFF'}}
          onRefresh={this._refresh}
        >
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Let’s Pull!
            </Text>
          </View>
        </PTRView>
      </View>

    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  header: {
    height: 60,
    borderColor: '#f9f9f9',
    backgroundColor: '#2196F3',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 40,
  }
});

AppRegistry.registerComponent('PullToRefreshProject', () => PullToRefreshProject);
