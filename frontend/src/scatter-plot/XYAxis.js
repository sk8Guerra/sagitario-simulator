import React from 'react';

import Axis from './Axis';

class XYAxis extends React.Component {
    render() {
      return (
        <g className="xy-axis">
          <Axis
            translate={`translate(0, ${this.props.height - this.props.padding})`}
            scale={this.props.xScale}
            orient="bottom"
          />
          <Axis
            translate={`translate(${this.props.padding}, 0)`}
            scale={this.props.xScale}
            orient="left"
          />
        </g>
      );
    }
  }

export default XYAxis;