import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import FightScreen from '../FightScreen/FightScreen'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FightScreen />
      </div>
    )
  }
}

export default App
