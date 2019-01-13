import React, { Component } from 'react'
import './style.css';

class ImageBox extends Component {
  render(props) {
    const { id, name, imgUrl} = this.props;

    // console.log("image box id:",id, name, imgUrl)

    return (
        <img 
          key={id} 
          id={id} 
          src={imgUrl} 
          alt={name} 
          onClick={this.props.clicked.bind(this, id)}
        />
    )
  }
}

export default ImageBox;