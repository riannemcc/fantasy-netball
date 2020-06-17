import React, { Component } from 'react'
import { withFirebase } from '../Firebase'


const ScoreInput = () => (
    <div>
      <h1>Input player scores</h1>
    </div>
  )
  const INITIAL_STATE = {
    player: '',
    round: '',
    score: 0,
  }
  class ScoreInputBase extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
      event.preventDefault();
      const { player, round, score } = this.state;
      this.props.firebase
        .updateScore(player, round, score)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
        //   this.props.history.push('/') 
        })
      .catch(error => {
          this.setState({ error });
        });
    };
    onChange = event => {
      this.setState({ [event.target.player]: event.target.value });
    };
    render() {
      const { player, round, score } = this.state;
      return (
        <div className="scoreContainer" >
          <form onSubmit={this.onSubmit} className="scoreForm">
            <input
              name="player"
              value={player}
              onChange={this.onChange}
              type="text"
              placeholder="Player name "
              className="playerInput"
            />
            <input
              name="round"
              value={round}
              onChange={this.onChange}
              type="number"
              placeholder="Round"
              className="roundInput"
            />
            <input
              name="score"
              value={score}
              onChange={this.onChange}
              type="number"
              placeholder="Score"
              className="scoreNumInput"
            />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    }
  }

  export default withFirebase(ScoreInputBase);
  export { ScoreInput };