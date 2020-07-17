import React, {Component} from 'react';

export default class Person extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p> Nome: {this.props.name}, Idade: {this.props.idade} </p>
        <p> {this.props.children} </p>
      </div>
     )
  }
}




