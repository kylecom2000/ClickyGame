import React, { Component } from 'react'
import './style.css';

export class ImageBox extends Component {
  render() {
    return (
        <img key={this.props.id} src={this.props.imgUrl} alt={this.props.name} />
    
    )
  }
}

export default ImageBox;