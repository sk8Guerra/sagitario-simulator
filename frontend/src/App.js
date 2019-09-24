import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import * as d3 from "d3";

import ScatterPlot from './scatter-plot/ScatterPlot';

import { onNewStep } from './socket/onNewStep';

const settings = {
  width: 5500,
  height: 3000,
  padding: 0,
  numDataPoints: 10000,
  maxRange: () => Math.random() * 3000
};

class App extends Component {

    state = {
      data: [],
      step: 0
    }
    intervalID = 0

    constructor ( props ) {
      super( props );
      onNewStep( ( data ) => {
        console.log(data);
      } );
      this.intervalID = setInterval( () => { this.goToGetNewStep() }, 1);
    }

    async componentWillMount() {
      let { step } = this.state;
      let coordinates = await axios.get(`http://172.16.10.63:1999/api/sagitario/circle/read/${step}/`)

      let parsed = coordinates.data.data.coordinates.map(coordinate =>
        [ parseInt((coordinate.x).toFixed(0)), parseInt((coordinate.y).toFixed(0)) ]
      );

      this.setState({
        data: parsed,
        step: coordinates.data.data.step
      });
    }

    goToGetNewStep = async () => {
      let { step } = this.state;
      let coordinates = await axios.get(`http://172.16.10.63:1999/api/sagitario/circle/read/${ step + 1 }/`)

      if (coordinates.data.status) {
        let parsed = coordinates.data.data.coordinates.map(coordinate =>
          [ parseInt((coordinate.x).toFixed(0)), parseInt((coordinate.y).toFixed(0)) ]
        );
        this.setState((prevState, props) => ({
          data: parsed,
          step: prevState.step + 1
        }));
      } else clearInterval(this.intervalID);
    }

    render() {
        return (
            <div className="mycolor">
                <ScatterPlot data={this.state.data} {...settings} />
            </div>
        );
    }
}

export default App;
