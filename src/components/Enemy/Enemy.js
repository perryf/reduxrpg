import React, {Component} from 'react'
import './Enemy.css'

class Enemy extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if (this.props.health <= 0) {
      console.log('Im dead!')
      this.props.nextLevel()
      this.props.nextEnemy()
    }
  }

  render () {
    let percentage = 100 / this.props.maxHealth
    console.log(percentage)
    console.log(this.props.health)
    return(
      <div className="enemy-container">
        <img src={this.props.img} className="enemy-image" />
        <h3>Enemy</h3>
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
