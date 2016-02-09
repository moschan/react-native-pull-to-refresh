# react-native-pull-to-refresh (iOS/Android)
> The pull-to-refresh view component for React Native

[![npm](https://img.shields.io/npm/v/react-native-pull-to-refresh.svg)]()[![npm](https://img.shields.io/npm/l/react-native-pull-to-refresh.svg)]()


[![NPM](https://nodei.co/npm/react-native-pull-to-refresh.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-pull-to-refresh/)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

Demo
---
![demo](./doc/arrow_update_demo.gif)
![demo](./doc/android_demo.gif)

# Installation

in Cli

```
npm i react-native-pull-to-refresh --save
```

in JavaScript

```
import PTRView from 'react-native-pull-to-refresh';
```

# Usage

```
var PullToRefreshProject = React.createClass({
  _refresh: function() {
    return new Promise((resolve) => {
      setTimeout(()=>{resolve()}, 2000)
    });
  },
  render: function() {
    return (
      <PTRView onRefresh={this._refresh} >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Let's Pull!
          </Text>
        </View>
      </PTRView>
    );
  },
});
```
# Props

## onRefresh
The method of refresh. You have to return promise object.

## delay(defalt:`0`)
delay time of refresh

## offset(defalt:`80`) `iOS`
distance of pull to refresh

## colors(defalt:`#000`) `Android`
The background color of the refresh indicator

## progressBackgroundColor(defalt:`transparent`) `Android`
The background color of the refresh indicator
# Contributing
Welcome :)


# License
MIT
