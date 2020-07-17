import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    return (
      <div>
        <button> Ver mais {this.props.name} </button>
      </div>
     )
  }
}