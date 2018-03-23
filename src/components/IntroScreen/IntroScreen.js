import React, {Component} from 'react'
import './IntroScreen.css'

class IntroScreen extends Component {
  constructor(props) {
    super(props)
  }

  pickCharacter(stat) {
    let imgSrc = ''
      switch (stat) {
        case 'fire':
          imgSrc='mario_fire.png'
          break
        case 'hammer':
          imgSrc='mario_hammer.gif'
          break
        case 'tanooki':
          imgSrc='mario_tanooki.gif'
          break
        case 'frog':
          imgSrc='mario_frog.gif'
          break
        case 'luigi':
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

  handleName(e) {
    this.props.introChooseName(e.target.value)
  }

  handleChoice(e) {
    this.props.introChooseCharacter(e.target.value)
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
            e.target.skills.value,
            this.pickCharacter(e.target.skills.value),
            e.target.skills.value
          )} 
        )}>
          <div className="intro-name">
            <input 
              type="text" 
              name="playerName" 
              placeholder="Your Name" 
              onChange={e => this.handleChoice(e)}
            />
          </div>
          <div className="intro-selections">
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="fire" onClick={e => this.handleChoice(e)}/>
                <div className="intro-img-box">
                  <h4>Strength</h4>
                  <img src="img/mario/mario_fire.png" alt="fire mario"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="hammer" onClick={e => this.handleChoice(e)}/>
                <div className="intro-img-box">
                  <h4>Defense</h4>
                  <img src="img/mario/mario_hammer.gif" alt="hammer mario"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="tanooki" onClick={e => this.handleChoice(e)}/>
                <div className="intro-img-box">
                  <h4>Magic</h4>
                  <img src="img/mario/mario_tanooki.gif" alt="tanooki mario"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="frog" onClick={e => this.handleChoice(e)}/>
                <div className="intro-img-box">
                  <h4>Max Health</h4>
                  <img src="img/mario/mario_frog.gif" alt="frog mario"/>
                </div>  
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="luigi" onClick={e => this.handleChoice(e)}/>
                <div className="intro-img-box">
                  <h4>Random Stat</h4>
                  <img src="img/mario/mario_luigi.png" alt="luigi"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="plain" onClick={e => this.handleChoice(e)}/>
                <div className="intro-img-box">
                  <h4>Plain (No stat increase)</h4>
                  <img src="img/mario/mario_plain.png" alt="plain mario"/>
                </div>
              </label>
            </div>
            <div className="intro-selection">
              <label className="intro-form">
                <input type="radio" name="skills" value="shoe" onClick={e => this.handleChoice(e)}/>
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
