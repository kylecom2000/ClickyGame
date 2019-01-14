import React, { Component } from 'react'
import './style.css';

class ImageBox extends Component {
  render(props) {
    const { id, name, imgUrl} = this.props;
    return (
        <img 
          key={id} 
          id={id} 
          src={imgUrl} 
          alt={name} 
          onClick={this.props.onClick.bind(this, id)}
        />
    )
  }
}

// function characterCard(prop){
//   const character = prop.data;
//   const guessChecker = prop.guessChecker;
//   const altText = `Picture of ${character.name}`

//   console.log (character.image);
//   return(
//           <div 
//             className="characterCard" 
//             data-name={character.name} 
//             onClick={() => guessChecker(character.name)} >
//               <img src={character.image} alt={altText} />
//           </div>
//   );
// }

export default ImageBox;