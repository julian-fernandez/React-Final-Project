import React, { Component } from 'react';
import './TrackList.css';

class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="tracklist-box">
     <table>
     <tr>
     <th>CD1</th>
     </tr>
     <tr>
     <td>Thumb</td>
     </tr>
     <tr>
     <td>50 Million Year Trip</td>
     </tr>
     <tr>
     <td>Caterpillar March</td>
     </tr>
     <tr>
     <td>Freedom Run</td>
     </tr>
     <tr>
     <td>Apothecaries' Weight</td>
     </tr>
     <tr>
     <td>Capsized</td>
     </tr>
     </table>
     </div>
     );
  }
}

export default TrackList;