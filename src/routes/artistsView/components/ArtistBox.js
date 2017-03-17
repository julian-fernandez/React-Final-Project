import React, { Component } from 'react';
import './ArtistBox.css';
import './RenderBox.js';

class ArtistBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="column half">
     <div className="artistbox">
     <img src="http://placehold.it/150x150"/>
     <h4><a href="/kyuss">Kyuss</a></h4>
     </div>
     </div>
     );
  }
}

export default ArtistBox;