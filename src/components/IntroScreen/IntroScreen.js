import React, {Component} from 'react'
import './IntroScreen.css'

class IntroScreen extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h3>Welcome to Redux RPG!</h3>
        <p>Choose your name and a stat to increase</p>
        <form onSubmit={((e) => {
          e.preventDefault()
          this.props.introSubmit(
            e.target.playerName.value, 
            e.target.skills.value
          )} 
        )}>
          <div>
            <label>Name</label>
            <input type="text" name="playerName"/>
          </div>
          <div className="intro-selections">
            <div class="intro-selection">
              <label>
                <input type="radio" name="skills" value="strength"/>
                <div className="intro-img-box">
                  <h4>Strength</h4>
                  <img src="img/mario_fire.png" alt="fire mario"/>
                </div>
              </label>
            </div>
            <div class="intro-selection">
              <label>
                <input type="radio" name="skills" value="defense"/>
                <div className="intro-img-box">
                  <h4>Defense</h4>
                  <img src="img/mario_hammer.gif" alt="hammer mario"/>
                </div>
              </label>
            </div>
            <div class="intro-selection">
              <label>
                <input type="radio" name="skills" value="magic"/>
                <div className="intro-img-box">
                  <h4>Magic</h4>
                  <img src="img/mario_tanooki.gif" alt="tanooki mario"/>
                </div>
              </label>
            </div>
            <div class="intro-selection">
              <label>
                <input type="radio" name="skills" value="maxHealth"/>
                <div className="intro-img-box">
                  <h4>Max Health</h4>
                  <img src="img/mario_frog.gif" alt="frog mario"/>
                </div>  
              </label>
            </div>
            <div class="intro-selection">
              <label>
                <input type="radio" name="skills" value="random"/>
                <div className="intro-img-box">
                  <h4>Random Stat</h4>
                  <img src="img/mario_luigi.png" alt="luigi"/>
                </div>
              </label>
            </div>
            <div class="intro-selection">
              <label>
                <input type="radio" name="skills" value="random"/>
                <div className="intro-img-box">
                  <h4>Plain (No stat increase)</h4>
                  <img src="img/mario_plain.png" alt="plain mario"/>
                </div>
              </label>
            </div>
            <div class="intro-selection">
              <label>
                <input type="radio" name="skills" value="random"/>
                <div className="intro-img-box">
                  <h4>Bonus?</h4>
                  <img src="img/mario_shoe.png" alt="shoe mario"/>
                </div>
              </label>
            </div>
          </div>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default IntroScreen
