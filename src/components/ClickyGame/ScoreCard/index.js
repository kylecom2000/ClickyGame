import React, { Component } from 'react'
import './style.css';

class ScoreCard extends Component {
  render(props) {
    // console.log(props)
    return (
      <React.Fragment>
        <div>
          Score {props.score}
        </div>
      </React.Fragment>
    )
  }
}

export default ScoreCard;