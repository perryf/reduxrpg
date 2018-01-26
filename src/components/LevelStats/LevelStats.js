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
    if (this.props.playerHealth <= 0) {
      this.props.playerDies()
    }
  }

  handleAttack() {
    this.props.playerAttacks(
      this.props.playerAttack,
      this.props.playerStrength,
      this.props.enemyDefense
    ), 
    this.props.playerStartAttackPhase()
    setTimeout(() => {
      this.props.enemyAttacks(
        this.props.enemyAttack,
        this.props.enemyStrength,
        this.props.playerDefense
      ),
      this.props.enemyStartAttackPhase()
      this.props.playerEndAttackPhase()
    }, 1000)
  }

  handleHeal() {
    this.props.playerHeals(
      this.props.playerMaxHealth,
      this.props.playerMagic
    ), 
    this.props.playerStartSpecialPhase()
    setTimeout(() => {
      this.props.enemyAttacks(
        this.props.enemyAttack,
        this.props.enemyStrength,
        this.props.playerDefense
      ),
      this.props.enemyAttack()
      this.props.playerEndSpecialPhase()
    }, 1000)
  }

  handleSpecial() {
    this.props.playerSpecials(
      this.props.playerSpecial,
      this.props.playerMagic
    ), this.props.playerStartAttackPhase()
    setTimeout(() => {
      this.props.enemyAttacks(
        this.props.enemyAttack,
        this.props.enemyStrength,
        this.props.playerDefense
      ), 
      this.props.enemyAttack()
      this.props.playerEndAttackPhase()
    }, 1000)
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
    let isDead = this.props.playerHealth <= 0 ?
      <p>You are dead!</p> : ""
    return (
      <div className="level-stats">
        {isDead}
        {this.props.enemyHealth > 0 ?
          <div className="action-buttons">
            <button
              className="action-button attack-button"
              onClick={() => this.handleAttack()}
            >Attack</button>
            {this.props.playerMana > 0 ?
              <button
                className="action-button special-button"
                onClick={() => this.handleSpecial()}
              >Special Attack (1 Mana)</button> :
              <button className="no-mana">Out of Mana!</button>
            }
            {this.props.playerMana > 0 ?
              <button
                className="action-button special-button"
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
