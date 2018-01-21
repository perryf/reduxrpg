import React, {Component} from 'react'
import './LevelUp.css'

class LevelUp extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h3>Level Up!</h3>
        <p>Choose a Skill to Increase!</p>
        <form>
          <div>
            <label>Strength</label>
            <input type="radio" name="skills" value="strength"/>
          </div>
          <div>
            <label>Defense</label>
            <input type="radio" name="skills" value="defense"/>
          </div>
          <div>
            <label>Magic</label>
            <input type="radio" name="skills" value="magic"/>
          </div>
          <div>
            <label>Max Health</label>
            <input type="radio" name="skills" value="maxHealth"/>
          </div>
          <input
            type="button"
            value="Next Enemy"
            onClick={((e) => {
              this.props.levelUp(e.target.form.skills.value)
              this.props.nextEnemy()
            })}
          />
        </form>
      </div>
    )
  }
}

export default LevelUp
