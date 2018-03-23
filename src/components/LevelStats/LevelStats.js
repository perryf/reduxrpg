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
    let playerCrit = Math.ceil(Math.random() * 6) === 6
    let enemyCrit = Math.ceil(Math.random() * 6) === 6
    this.props.playerAttacks(
      this.props.playerAttack,
      this.props.playerStrength,
      this.props.enemyDefense,
      playerCrit
    ), 
    this.props.playerStartAttackPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.props.playerEndAttackPhase()
    }, 1000)
  }

  handleSpecial() {
    this.props.playerSpecials(
      this.props.playerSpecial,
      this.props.playerMagic,
      this.props.playerLevel
    ), this.props.playerStartSpecialPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.props.playerEndSpecialPhase()
    }, 1000)
  }

  handleHeal() {
    this.props.playerHeals(
      this.props.playerHealth,
      this.props.playerMaxHealth,
      this.props.playerMagic
    ), 
    this.props.playerStartHealPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.props.playerEndHealPhase()
    }, 1000)
  }

  handleEnemyResponse() {
    let isSpecialing = Math.ceil(Math.random() * 4) === 4
    if (isSpecialing) {
      setTimeout(() => {
        this.props.enemySpecials(
          this.props.enemyAttack,
          this.props.enemyMagic,
          this.props.enemyHealth
        ), 
        this.props.enemyStartAttackPhase(),
        setTimeout(() => {
          this.props.enemyEndAttackPhase()
        }, 1000)
      }, 1000)
    } else {
      setTimeout(() => {
        this.props.enemyAttacks(
          this.props.enemyAttack,
          this.props.enemyStrength,
          this.props.playerDefense,
          this.props.enemyHealth
        ), 
        this.props.enemyStartAttackPhase(),
        setTimeout(() => {
          this.props.enemyEndAttackPhase()
        }, 1000)
      }, 1000)
    }
  }

  render() {
    let enemyDmgTaken = this.props.enemyDmgTaken ?
      `${this.props.enemyName} Took ${this.props.enemyDmgTaken} Damage! ` : null
      let playerHitCrit = this.props.playerHitCrit ?
      "Critial Hit!" : ""
    let playerDmgTaken = this.props.playerDmgTaken ?
      <p>{this.props.playerName} Took {this.props.playerDmgTaken} Damage!</p> : <p></p>
    let playerHealAmt = this.props.playerHealAmt ?
      <p>{this.props.playerName} Healed {this.props.playerHealAmt} Health!</p> : <p></p>
    let enemyFallen = this.props.enemyHealth <= 0 ?
      <p>{this.props.enemyName} has fallen!</p> : ""
    let nextButton = this.props.isLevelingUp ?
      <LevelUpWrapper /> : ""
    let isDead = this.props.playerHealth <= 0 ?
      <h2>You are dead!</h2> : ""
    return (
      <div className="level-stats">
        {isDead ? 
          isDead :
          <div>
            {this.props.enemyHealth > 0 ?
              <div>
                {!this.props.enemysTurn ?
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
                      <button className="no-mana action-button">Out of Mana!</button>
                    }
                    {this.props.playerMana > 0 ?
                      <button
                        className="action-button special-button"
                        onClick={() => this.handleHeal()}
                      >Heal (1 Mana)</button> :
                      <button className="no-mana action-button">Out of Mana!</button>
                    } 
                  </div> : 
                  <div className="action-buttons">
                    <button className="fake-button action-button">Attack</button>
                    <button className="fake-button action-button">Special Attack (1 Mana)</button>
                    <button className="fake-button action-button">Heal (1 Mana)</button>
                  </div>
                }
              </div> : <div></div>
            }
          </div>
        }
        <div className="action-text">
          <div>{playerHealAmt}</div>
          <div>{playerDmgTaken}</div>
          <div>{playerHitCrit} {enemyDmgTaken}</div>
          <div>{enemyFallen}</div>
          <div>{nextButton}</div>
        </div>
      </div>
    )
  }
}

export default LevelStats
