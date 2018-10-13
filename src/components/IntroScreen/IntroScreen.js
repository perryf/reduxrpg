import React, { Component } from 'react'
import './IntroScreen.css'

class IntroScreen extends Component {
	pickCharacter(choice, result) {
		let imgSrc = ''
		let stat = ''
		switch (choice) {
			case 'fire':
				imgSrc = 'mario_fire.png'
				stat = 'strength'
				break
			case 'hammer':
				imgSrc = 'mario_hammer.gif'
				stat = 'defense'
				break
			case 'tanooki':
				imgSrc = 'mario_tanooki.gif'
				stat = 'magic'
				break
			case 'frog':
				imgSrc = 'mario_frog.gif'
				stat = 'maxHealth'
				break
			case 'luigi':
				imgSrc = 'mario_luigi.png'
				stat = this.luigiRandomizer()
				break
			case 'plain':
				imgSrc = 'mario_plain.png'
				break
			case 'shoe':
				imgSrc = 'mario_shoe.png'
				stat = 'maxMana'
				break
			default:
				imgSrc = 'mario_plain.png'
				break
		}
		if (result === 'imgName') return `img/mario/${imgSrc}`
		else if (result === 'stat') return stat
	}

	luigiRandomizer() {
		let randomNum = Math.ceil(Math.random() * 4)
		switch (randomNum) {
			case 1:
				return 'strength'
			case 2:
				return 'defense'
			case 3:
				return 'magic'
			case 4:
				return 'maxHealth'
			default:
				return 'strength'
		}
	}

	handleName(e) {
		this.props.introChooseName(e.target.value)
	}

	handleChoice(e) {
		this.props.introChooseCharacter(e.target.value)
	}

	render() {
		return (
			<div>
				<h3>Welcome to Redux RPG!</h3>
				<h4>{`This game is not complete! Play at your own risk :)`}</h4>
				<p>Choose your name and a stat to increase</p>
				<form
					onSubmit={e => {
						e.preventDefault()
						this.props.introSubmit(
							e.target.playerName.value,
							this.pickCharacter(e.target.skills.value, 'stat'),
							this.pickCharacter(e.target.skills.value, 'imgName'),
							e.target.skills.value
						)
						this.props.checkMovePreReqs()
					}}
				>
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
								<input
									type="radio"
									name="skills"
									value="fire"
									onClick={e => this.handleChoice(e)}
								/>
								<div className="intro-img-box">
									<h4>Strength</h4>
									<img src="img/mario/mario_fire.png" alt="fire mario" />
								</div>
							</label>
						</div>
						<div className="intro-selection">
							<label className="intro-form">
								<input
									type="radio"
									name="skills"
									value="hammer"
									onClick={e => this.handleChoice(e)}
								/>
								<div className="intro-img-box">
									<h4>Defense</h4>
									<img src="img/mario/mario_hammer.gif" alt="hammer mario" />
								</div>
							</label>
						</div>
						<div className="intro-selection">
							<label className="intro-form">
								<input
									type="radio"
									name="skills"
									value="tanooki"
									onClick={e => this.handleChoice(e)}
								/>
								<div className="intro-img-box">
									<h4>Magic</h4>
									<img src="img/mario/mario_tanooki.gif" alt="tanooki mario" />
								</div>
							</label>
						</div>
						<div className="intro-selection">
							<label className="intro-form">
								<input
									type="radio"
									name="skills"
									value="frog"
									onClick={e => this.handleChoice(e)}
								/>
								<div className="intro-img-box">
									<h4>Max Health</h4>
									<img src="img/mario/mario_frog.gif" alt="frog mario" />
								</div>
							</label>
						</div>
						<div className="intro-selection">
							<label className="intro-form">
								<input
									type="radio"
									name="skills"
									value="luigi"
									onClick={e => this.handleChoice(e)}
								/>
								<div className="intro-img-box">
									<h4>Random Stat</h4>
									<img src="img/mario/mario_luigi.png" alt="luigi" />
								</div>
							</label>
						</div>
						<div className="intro-selection">
							<label className="intro-form">
								<input
									type="radio"
									name="skills"
									value="plain"
									onClick={e => this.handleChoice(e)}
								/>
								<div className="intro-img-box">
									<h4>Plain (No stat increase)</h4>
									<img src="img/mario/mario_plain.png" alt="plain mario" />
								</div>
							</label>
						</div>
						<div className="intro-selection">
							<label className="intro-form">
								<input
									type="radio"
									name="skills"
									value="shoe"
									onClick={e => this.handleChoice(e)}
								/>
								<div className="intro-img-box">
									<h4>Max Mana</h4>
									<img src="img/mario/mario_shoe.png" alt="shoe mario" />
								</div>
							</label>
						</div>
					</div>
					<input className="intro-submit" type="submit" value="submit" />
				</form>
			</div>
		)
	}
}

export default IntroScreen
