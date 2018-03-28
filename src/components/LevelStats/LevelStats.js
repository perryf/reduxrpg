import React, {Component} from 'react'
import LevelUpWrapper from '../../containers/LevelUpWrapper'
import './LevelStats.css'

class LevelStats extends Component {
  componentDidUpdate() {
    if (this.props.enemyHealth <= 0) {
      this.props.needsLevelUp()
    }
    if (this.props.playerHealth <= 0) {
      this.props.playerDies()
    }
  }

  fadeText(className) {
    let elements = Array.from(document.querySelectorAll(className))
    elements.forEach((el) => {
      el.classList.remove('hide')
    })
    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add('hide')
      })
    }, 1000)
  }

  handleAttack() {
    let playerCrit = Math.ceil(Math.random() * 6) === 6
    this.props.playerAttacks(
      this.props.playerAttack,
      this.props.playerStrength,
      this.props.enemyDefense,
      playerCrit
    )
    this.props.playerStartAttackPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.fadeText('.damage-text.enemy-text')
    }, 10)
    setTimeout(() => {
      this.props.playerEndAttackPhase()
    }, 1000)
  }

  handleSpecial() {
    this.props.playerSpecials(
      this.props.playerSpecial,
      this.props.playerMagic,
      this.props.playerLevel
    )
    this.props.playerStartSpecialPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.fadeText('.damage-text.enemy-text')
    }, 10)
    setTimeout(() => {
      this.props.playerEndSpecialPhase()
    }, 1000)
  }

  handleHeal() {
    this.props.playerHeals(
      this.props.playerHealth,
      this.props.playerMaxHealth,
      this.props.playerMagic
    )
    this.props.playerStartHealPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.fadeText('.player-text.heal-text')
    }, 10)
    setTimeout(() => {
      this.props.playerEndHealPhase()
    }, 1000)
  }


  handleEnemyResponse() {
    let isSpecialing = Math.ceil(Math.random() * 4) === 4
    setTimeout(() => {
      isSpecialing ? 
        this.props.enemySpecials(
          this.props.enemyAttack,
          this.props.enemyMagic,
          this.props.enemyHealth
        ) :
        this.props.enemyAttacks(
          this.props.enemyAttack,
          this.props.enemyStrength,
          this.props.playerDefense,
          this.props.enemyHealth
        )
      this.props.enemyStartAttackPhase()
      this.fadeText('.damage-text.player-text')
      setTimeout(() => {
        this.props.enemyEndAttackPhase()
      }, 1000)
    }, 1000)
  }

  render() {
    let playerHitCrit = this.props.playerHitCrit ?
      <p className='damage-text enemy-text'>Critial Hit!</p> : ''
    let enemyDmgTaken = this.props.enemyDmgTaken ? 
      <div>
        <p className='damage-text enemy-text'>{this.props.enemyDmgTaken}</p>
        {playerHitCrit}
      </div> : ''
    let playerDmgTaken = this.props.playerDmgTaken ?
      <p className='damage-text player-text'>
        {this.props.playerDmgTaken}
      </p> : '' 
    let playerHealAmt = this.props.playerLastMove === 'heal' ?
      <p className='heal-text player-text'>
        {this.props.playerHealAmt}
      </p> :  ''
    let enemyFallen = this.props.enemyHealth <= 0 ? 
      <p className='damage-text enemy-text'>
        {this.props.enemyName} has fallen!
      </p> : ''
    let levelUp = this.props.isLevelingUp ?
      <LevelUpWrapper /> : null
    let isDead = this.props.playerHealth <= 0 ?
      <h2>You are dead</h2> : null
    return (
      <div className='level-stats'>
        {isDead ?
          isDead :
          <div>
            {this.props.enemyHealth > 0 ?
              <div>
                {!this.props.enemysTurn ?
                  <div className='action-buttons'>
                    <button
                      className='action-button attack-button'
                      onClick={() => this.handleAttack()}
                    >Attack</button>
                    {this.props.playerMana > 0 ?
                      <button
                        className='action-button special-button'
                        onClick={() => this.handleSpecial()}
                      >Magic Attack (1 Mana)</button> :
                      <button className='no-mana action-button'>Out of Mana!</button>
                    }
                    {this.props.playerMana > 0 ?
                      <button
                        className='action-button special-button'
                        onClick={() => this.handleHeal()}
                      >Heal (1 Mana)</button> :
                      <button className='no-mana action-button'>Out of Mana!</button>
                    } 
                  </div> : 
                  <div className='action-buttons'>
                    <button className='fake-button action-button'>Attack</button>
                    <button className='fake-button action-button'>Special Attack (1 Mana)</button>
                    <button className='fake-button action-button'>Heal (1 Mana)</button>
                  </div>
                }
              </div> : <div></div>
            }
          </div>
        }
        {levelUp}
        <div className='action-text'>
          <div className='player-text-box'>
            {playerHealAmt}
            {playerDmgTaken}
          </div>
          <div className='enemy-text-box'>
            {enemyFallen}
            {enemyDmgTaken}
          </div>
        </div>
      </div>
    )
  }
}

export default LevelStats
