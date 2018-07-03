/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import Clock from './src/Clock';
import imgBackground from './assets/timebg2.jpg';

export default class App extends Component {

  state = {
    time: ''
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({time: new Date().toLocaleString().split(' ')[4]});
    }, 1000);
  }

  render() {
    console.log(this.state.time);
    return (
      <View style={styles.container}>
        <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', opacity: 0.7 }}>
          <Image source={imgBackground}
          style={{ flex: 1 ,height: null, width: null }}/>
        </View>
        <Clock time={this.state.time} size={30}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // center children vertically
    alignItems: 'center',     // center children horizontally
    backgroundColor: '#F5FCFF',
  }
});
