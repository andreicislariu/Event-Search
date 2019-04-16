import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Maps from './components/Maps';
import List from './components/List';
import { getCurrentPosition } from '../src/utils/getCurrentPos';

class App extends Component {
  state = {
    events: [],
    latlong: ''
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Inputs />
        <Maps />
        <List />
      </div>
    );
  }

  componentDidMount() {
    this.updateLocation();
  }

  updateLocation = async () => {
    try {
      const { coords } = await getCurrentPosition();
      const { longitude, latitude } = coords;
      this.setState({
        latlong: latitude + ',' + longitude
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default App;
