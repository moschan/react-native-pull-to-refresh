/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import PTRView from 'react-native-pull-to-refresh'

export default class PullToRefreshExample extends Component {
  constructor(param) {
    super(param);
    this.state = {
      cards: [1, 2, 3]
    }
    this._refresh = this._refresh.bind(this);

  }
  _refresh () {
    // you must return Promise everytime
    return new Promise((resolve) => {
      setTimeout(()=>{
        // some refresh process should come here
        this.setState({cards: this.state.cards.concat([this.state.cards.length + 1])})
        resolve(); 
      }, 2000)
    })
  }
  render() {
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
            <Text style={styles.welcome}> Pull Me!😸 </Text>
            {this.state.cards.map((el, i) => (
              <View style={styles.card} key={i}>
                <Text style={styles.card__text}>Card: {el}</Text>
              </View>
            ))}
          </View>
        </PTRView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
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
  },
  card: {
    flex: 1,
    borderColor: '#fafafa',
    backgroundColor: '#2196F3',
    borderWidth: 2,
    borderRadius: 3,
    margin: 5,
  },
  card__text: {
    color: '#fafafa',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('PullToRefreshExample', () => PullToRefreshExample);
