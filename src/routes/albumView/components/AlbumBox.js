import React, { Component } from 'react';
import './AlbumBox.css';

class ArtistBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="column half">
     <div className="artistbox">
     <img src="http://placehold.it/150x150"/>
     <div className="boxinfo">
     <h4><a href="#">Blues for the Red Sun</a></h4>
     <p>1994</p>
     </div>
     </div>
     </div>
     );
  }
}

export default ArtistBox;