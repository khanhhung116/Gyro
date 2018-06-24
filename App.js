import React, { Component } from 'react';
import {StatusBar} from 'react-native';
StatusBar.setHidden(true);

import Test from './Main/Test';


export default class App extends Component {
  render() {
    return (
      <Test/>
    );
  }
}


