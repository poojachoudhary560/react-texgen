import React, { Component } from 'react';
class Output extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }
  render(){
    return(
      <div className="card bg-light mb-3">
        <div className="card-body output">
          <p className="card-text">
            {this.props.value}
          </p>
        </div>
      </div>
    )
  }
}
export default Output;
