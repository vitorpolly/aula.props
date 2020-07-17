import React, {Component} from 'react';
import Person from './components/Person.js'
import Button from './components/Button.js'
import './App.css';

class App extends Component {
  render() {
    const info = {
      joao: 'futebol',
      rafael: 'tennis'
    }
    return (
      <div className = 'App'>
      <h1> Amigos </h1>
      <Person name = 'Rafa' idade = '15' info = {info}/>
      <Button name = 'Rafa'/>
      <Person name = 'João' idade = '17'> Hobbie: futebol </Person>
      <Button name = 'João'/>
      </div>
     )
  }
}

export default App;
