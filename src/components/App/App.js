import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import FightScreenWrapper from '../../containers/FightScreenWrapper'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FightScreenWrapper />
      </div>
    )
  }
}

export default App
