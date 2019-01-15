import React, { Component } from 'react'
import './style.css';

class ImageBox extends Component {
  render() {
    const { id, name, imgUrl} = this.props;
    return (
        <img 
          key={id} 
          id={id} 
          src={imgUrl} 
          alt={name} 
          onClick={() => this.props.onClick(this.props.id)}
        />
    )
  }
}

export default ImageBox;