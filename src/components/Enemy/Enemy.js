import React, {Component} from 'react'
import './Enemy.css'

class Enemy extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if (this.props.health <= 0) {
      console.log('Im dead!')
      this.props.enemyDies()
      this.props.enemyRecovers()
    }
  }

  render () {
    return(
      <div className="enemy-container">
        <div className="enemy-image"></div>
        <h3>Enemy</h3>
        <div className="health-bar">
          <div
            className="enemy-health"
            style={{width: this.props.health + "px"}}
          ></div>
        </div>
      </div>
    )
  }
}

export default Enemy
