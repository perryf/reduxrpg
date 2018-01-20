import React, {Component} from 'react'
import store from '../../store'
import './Enemy.css'

class Enemy extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if (this.props.health <= 0) {
      console.log('Im dead!')
      this.props.nextEnemy()
    } else {
    }
  }

  componentWillUpdate(nextProps, nextState) {
    this.displayDamage(this.props.health - store.getState().enemy.health)
  }

  displayDamage(dmg) {
    return dmg
  }

  render () {
    let percentage = 100 / this.props.maxHealth
    return(
      <div className="enemy-container">
        <img src={this.props.img} className="enemy-image" />
        <h3>{this.props.name}</h3>
        <div className="health-bar">
          <div
            className="enemy-health"
            style={{width: this.props.health*percentage + "px"}}
          ></div>
        </div>
      </div>
    )
  }
}

export default Enemy
