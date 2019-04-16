import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Maps from "./components/Maps";
import List from "./components/List";
import { getCurrentPosition } from "../src/utils/getCurrentPos";
import axios from "axios";
const apiKey = "2IUKkC9J7y1styxrAIWMoefhkjhWk7zW";

class App extends Component {
  state = {
    events: [],
    latlong: ""
  };

  render() {
    const { events } = this.state;
    return (
      <div className="App">
        <Header />
        <Inputs />
        <Maps />
        <List events={events} />
      </div>
    );
  }

  componentDidMount() {
    this.updateLocation();
    this.fetchEvents();
  }

  fetchEvents = async () => {
    const {
      data: {
        _embedded: { events }
      }
    } = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${apiKey}`
    );
    this.setState({ events });
  };

  updateLocation = async () => {
    try {
      const { coords } = await getCurrentPosition();
      const { longitude, latitude } = coords;
      this.setState({
        latlong: latitude + "," + longitude
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default App;
