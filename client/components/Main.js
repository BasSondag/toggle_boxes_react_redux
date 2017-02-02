import React from 'react';
import { Link } from 'react-router';
import Box from './Box';

const Main = React.createClass({

	render(){
		return (
	      <div>
	        <button onClick={this.props.toggleAllBoxes}>Toggle All Boxes</button>
	        <div>
	          <Box
	            color='black'
	            display={this.props.black}
	            toggleSingleBox={this.props.toggleSingleBox}
	          />
	          <Box
	            color='blue'
	            display={this.props.blue}
	            toggleSingleBox={this.props.toggleSingleBox}
	          />
	        </div>
	      </div>
    	)
  	}
})

export default Main