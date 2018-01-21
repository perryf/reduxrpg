import React, {Component} from 'react'
import './LevelStats.css'

class LevelStats extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let enemyDmgTaken = this.props.enemyDmgTaken ?
      <p>{this.props.enemyName} Took {this.props.enemyDmgTaken} Damage!</p> :
      <p></p>
    return (
      <div>
        <button
          className="attack"
          onClick={() => this.props.playerAttacks(
            this.props.playerStrength,
            this.props.playerAttack,
            this.props.enemyDefense
          )}
        >Attack!</button>
        <button
          className="heal"
          onClick={() => this.props.playerHeals}
        >Heal!</button>
        {enemyDmgTaken}
      </div>
    )
  }
}

export default LevelStats
