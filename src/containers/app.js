import React, { Component } from 'react';
import PodCast from './pod-cast';
import ErrorDialog from '../components/error-dialog'

export default class App extends Component {
  render() {
    return (
      <div>
      <PodCast/>
      <ErrorDialog/>
      </div>
    );
  }
}


