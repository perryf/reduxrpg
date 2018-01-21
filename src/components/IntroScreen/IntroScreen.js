import React, {Component} from 'react'
import './IntroScreen.css'

class IntroScreen extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <form>
          <label>Name</label>
          <input type="text" name="playerName"/>
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
            value="submit"
            onClick={((e) => this.props.introSubmit(e.target.form.playerName.value, e.target.form.skills.value) )}
          />
        </form>
      </div>
    )
  }
}

export default IntroScreen
