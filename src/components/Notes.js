import React, { Component } from 'react';
import '../style/Notes.css';

class Notes extends Component {
  render(props) {
    return (
      <div className="noteBox">
        <p className="noteInfo">{this.props.noteInfo}</p>
      </div>
    )
  }
}

export default Notes;
