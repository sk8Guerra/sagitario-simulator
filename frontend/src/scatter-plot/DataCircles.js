import React from 'react';

class DataCircles extends React.Component {

    renderCircle( coords ) {
      let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return (
          <circle
            stroke={ color }
            fill={ color }
            cx={this.props.xScale(coords[0])}
            cy={this.props.yScale(coords[1])}
            r={5}
            key={Math.random() * 1} />
        );
    }

    render() {
      return (
        <g>
            {this.props.data.map(this.renderCircle.bind(this))}
        </g>
      );
    }
  }

export default DataCircles;
