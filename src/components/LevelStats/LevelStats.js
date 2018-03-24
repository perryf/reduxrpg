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

  enemyTextFade() {
    let enemyText = Array.from(document.querySelectorAll('.enemy-text'))
    enemyText.map((el) => {
      el.classList.remove('hide')
    })
    setTimeout(() => {
      enemyText.map((el) => {
        el.classList.add('hide')
      })
    }, 1500)
  }

  playerTextFade() {
    let playerText = Array.from(document.querySelectorAll('.player-text'))
    playerText.map((el) => {
      el.classList.remove('hide')
    })
    setTimeout(() => {
      playerText.map((el) => {
        el.classList.add('hide')
      })
    }, 1500)
  }

  handleAttack() {
    this.enemyTextFade()
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
    this.enemyTextFade()
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
    this.enemyTextFade()
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
        this.playerTextFade()
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
        this.playerTextFade()
      }, 1000)
    }
  }

  render() {
    let playerHitCrit
    let enemyDmgTaken
    let playerDmgTaken
    let playerHealAmt
    let enemyFallen
    let levelUp
    let isDead
    this.props.playerHitCrit ?
      playerHitCrit = <p className='damage-text enemy-text'>Critial Hit!</p> :
      playerHitCrit = ''
    this.props.enemyDmgTaken ? (
      // this.enemyTextFade(),
      enemyDmgTaken = 
        <div>
          <p className='damage-text enemy-text'>
            {this.props.enemyDmgTaken}
          </p>
          {playerHitCrit}
        </div>
      ) :
      enemyDmgTaken = ''
    this.props.playerDmgTaken ? (
      // this.playerTextFade(),
      playerDmgTaken = 
        <p className='damage-text player-text'>
          {this.props.playerDmgTaken}
        </p>) :
      playerDmgTaken = '' 
    this.props.playerHealAmt ? (
      // this.playerTextFade(),
      playerHealAmt = 
        <p className='heal-text player-text'>
          {this.props.playerHealAmt}
        </p>) : 
      playerHealAmt = ''
    this.props.enemyHealth <= 0 ?(
      // this.enemyTextFade(),
      enemyFallen =
        <p className = 'damage-text enemy-text'>
          {this.props.enemyName} has fallen!
        </p>) :
      enemyFallen = ''
    this.props.isLevelingUp ?
      levelUp = <LevelUpWrapper /> :
      levelUp = null
    this.props.playerHealth <= 0 ?
      isDead = <h2>You are dead</h2> :
      isDead = null
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
                      >Special Attack (1 Mana)</button> :
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
          <div className='player-text'>
            {playerHealAmt}
            {playerDmgTaken}
          </div>
          <div className='enemy-text'>
            {enemyFallen}
            {enemyDmgTaken}
          </div>
        </div>
      </div>
    )
  }
}

export default LevelStats
