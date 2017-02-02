import React from 'react'
const Box = React.createClass({
    toggleHelper(){
      this.props.toggleSingleBox(this.props.color)
    },
    render() {
        var displayClass = (this.props.display) ? 'show' : 'hide'
        return (
          <div className='box-holder'>
            <button onClick={this.toggleHelper}>
              Toggle {this.props.color} box
            </button>
            <div className={displayClass + ' ' + this.props.color}>
            </div>
          </div>
        )
    }
})

export default Box;
