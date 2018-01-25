import React, {Component} from 'react'
import LevelUpWrapper from '../../containers/LevelUpWrapper'
import './LevelStats.css'

class LevelStats extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if (this.props.enemyHealth <= 0) {
      this.props.needsLevelUp()
    }
  }

  handleAttack() {
    this.props.playerAttacks(
      this.props.playerAttack,
      this.props.playerStrength,
      this.props.enemyDefense
    )
    this.props.enemyAttacks(
      this.props.enemyAttack,
      this.props.enemyStrength,
      this.props.playerDefense
    )
  }

  handleHeal() {
    this.props.playerHeals(
      this.props.playerMaxHealth,
      this.props.playerMagic
    )
    this.props.enemyAttacks(
      this.props.enemyAttack,
      this.props.enemyStrength,
      this.props.playerDefense
    )
  }

  handleSpecial() {
    this.props.playerSpecials(
      this.props.playerSpecial,
      this.props.playerMagic
    )
    this.props.enemyAttacks(
      this.props.enemyAttack,
      this.props.enemyStrength,
      this.props.playerDefense
    )
  }

  render() {
    let enemyDmgTaken = this.props.enemyDmgTaken ?
      <p>{this.props.enemyName} Took {this.props.enemyDmgTaken} Damage!</p> : <p></p>
    let playerDmgTaken = this.props.playerDmgTaken ?
      <p>{this.props.playerName} Took {this.props.playerDmgTaken} Damage!</p> : <p></p>
    let playerHealAmt = this.props.playerHealAmt ?
      <p>{this.props.playerName} Healed {this.props.playerHealAmt} Health!</p> : <p></p>
    let enemyFallen = this.props.enemyHealth <= 0 ?
      <p>{this.props.enemyName} has fallen!</p> : ""
    let nextButton = this.props.isLevelingUp ?
      <LevelUpWrapper /> : ""
    return (
      <div>
        {this.props.enemyHealth > 0 ?
          <div className="action-buttons">
            <button
              className="action-button"
              onClick={() => this.handleAttack()}
            >Attack</button>
            {this.props.playerMana > 0 ?
              <button
                className="action-button"
                onClick={() => this.handleSpecial()}
              >Special Attack (1 Mana)</button> :
              <button className="no-mana">Out of Mana!</button>
            }
            {this.props.playerMana > 0 ?
              <button
                className="action-button"
                onClick={() => this.handleHeal()}
              >Heal (1 Mana)</button> :
              <button className="no-mana">Out of Mana!</button>
            }
          </div> :
          <div></div>
        }
        {playerHealAmt}
        {playerDmgTaken}
        {enemyDmgTaken}
        {enemyFallen}
        {nextButton}
      </div>
    )
  }
}

export default LevelStats
