import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

class Axis extends React.Component {
    componentDidMount() {
      this.renderAxis();  
    }
    
    componentDidUpdate() {
      this.renderAxis();
    }
    
    renderAxis() {
      const node = ReactDOM.findDOMNode(this.refs.axisContainer);
      const axis = d3.svg.axis()
        .orient(this.props.orient)
        .ticks(5)
        .scale(this.props.scale);
      d3.select(node).call(axis);
    }
    
    render() {
      return <g className="axis" ref="axisContainer" transform={this.props.translate} />
    }
  }

  export default Axis;