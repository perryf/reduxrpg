import React, {Component} from 'react'
import store from '../../store'
import './Enemy.css'

class Enemy extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    let percentage = 100 / this.props.maxHealth
    return (
      <div className="enemy-container">
        {this.props.health > 0 ?
          <div className="enemy-info">
            <img src={this.props.img} className="enemy-image" />
            <h3>{this.props.name}</h3>
            <div className="health-bar">
              <div
                className="enemy-health"
                style={{width: this.props.health*percentage + "px"}}
              ></div>
            </div>
          </div> :
          <div className="enemy-container"></div>
        }
      </div>
    )
  }
}

export default Enemy
