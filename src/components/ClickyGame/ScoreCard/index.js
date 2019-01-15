import React, { Component } from 'react'
import './style.css';

class ScoreCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>
            Score: {this.props.score}  Best Score: {this.props.bestScore}
          </h1>
          <h1>
            {this.props.message}
          </h1>
        </div>

      </React.Fragment>
    )
  }
}

export default ScoreCard;