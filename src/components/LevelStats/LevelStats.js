import React, {Component} from 'react'
import LevelUpWrapper from '../../containers/LevelUpWrapper'
import './LevelStats.css'

class LevelStats extends Component {
  constructor(props) {
    super(props)
  }

  handleAttack() {
    this.props.playerAttacks(
      this.props.playerStrength,
      this.props.playerAttack,
      this.props.enemyDefense
    )
    this.props.enemyAttacks(
      this.props.enemyStrength,
      this.props.enemyAttack,
      this.props.playerDefense
    )
  }

  handleHeal() {
    this.props.playerHeals()
    this.props.enemyAttacks(
      this.props.enemyStrength,
      this.props.enemyAttack,
      this.props.playerDefense
    )
  }

  handleSpecial() {
    this.props.playerSpecials(
      this.props.playerMagic,
      this.props.playerSpecial
    )
    this.props.enemyAttacks(
      this.props.enemyStrength,
      this.props.enemyAttack,
      this.props.playerDefense
    )
  }

  render() {
    let enemyDmgTaken = this.props.enemyDmgTaken ?
      <p>{this.props.enemyName} Took {this.props.enemyDmgTaken} Damage!</p> : <p></p>
    let playerDmgTaken = this.props.playerDmgTaken ?
      <p>{this.props.playerName} Took {this.props.playerDmgTaken} Damage!</p> : <p></p>
    let enemyFallen = this.props.enemyHealth <= 0 ?
      <p>{this.props.enemyName} has fallen!</p> : ""
    let nextButton = this.props.enemyHealth <= 0 ?
      <LevelUpWrapper /> : ""
    return (
      <div>
        {this.props.enemyHealth > 0 ?
          <div className="action-buttons">
            <button
              className="action-button"
              onClick={() => this.handleAttack()}
            >Attack!</button>
            <button
              className="action-button"
              onClick={() => this.handleSpecial()}
            >Special Attack!</button>
            <button
              className="action-button"
              onClick={() => this.handleHeal()}
            >Heal!</button>
          </div> :
          <div></div>
        }
        {playerDmgTaken}
        {enemyDmgTaken}
        {enemyFallen}
        {nextButton}
      </div>
    )
  }
}

export default LevelStats
