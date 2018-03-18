import React, {Component} from 'react'
import './IntroScreen.css'

class IntroScreen extends Component {
  constructor(props) {
    super(props)
  }

  pickCharacter(stat) {
    let imgSrc = ''
      switch (stat) {
        case 'strength':
          imgSrc='mario_fire.png'
          break
        case 'defense':
          imgSrc='mario_hammer.gif'
          break
        case 'magic':
          imgSrc='mario_tanooki.gif'
          break
        case 'maxHealth':
          imgSrc='mario_frog.gif'
          break
        case 'random':
          imgSrc='mario_luigi.png'
          break
        case 'plain':
          imgSrc='mario_plain.png'
          break
        case 'shoe':
          imgSrc='mario_shoe.png'
          break
        default:
          imgSrc='mario_plain.png'
          break
      }
    return `img/mario/${imgSrc}`
  }

  render () {
    return (
      <div>
        <img src="img/poppybrossr.gif"/>
        <h3>Welcome to Redux RPG!</h3>
        <p>Choose your name and a stat to increase</p>
        <form onSubmit={((e) => {
          e.preventDefault()
          this.props.introSubmit(
            e.target.playerName.value, 
            e.target.skills.value,
            this.pickCharacter(e.target.skills.value)
          )} 
        )}>
          <div className="intro-name">
            <input type="text" name="playerName" placeholder="Your Name"/>
          </div>
          <div className="intro-selections">
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="strength"/>
                <div className="intro-img-box">
                  <h4>Strength</h4>
                  <img src="img/mario/mario_fire.png" alt="fire mario"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="defense"/>
                <div className="intro-img-box">
                  <h4>Defense</h4>
                  <img src="img/mario/mario_hammer.gif" alt="hammer mario"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="magic"/>
                <div className="intro-img-box">
                  <h4>Magic</h4>
                  <img src="img/mario/mario_tanooki.gif" alt="tanooki mario"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="maxHealth"/>
                <div className="intro-img-box">
                  <h4>Max Health</h4>
                  <img src="img/mario/mario_frog.gif" alt="frog mario"/>
                </div>  
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="random"/>
                <div className="intro-img-box">
                  <h4>Random Stat</h4>
                  <img src="img/mario/mario_luigi.png" alt="luigi"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="plain"/>
                <div className="intro-img-box">
                  <h4>Plain (No stat increase)</h4>
                  <img src="img/mario/mario_plain.png" alt="plain mario"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="shoe"/>
                <div className="intro-img-box">
                  <h4>Bonus?</h4>
                  <img src="img/mario/mario_shoe.png" alt="shoe mario"/>
                </div>
              </label>
            </div>
          </div>
          <input className="intro-submit" type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default IntroScreen
