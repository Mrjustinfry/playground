import React, { Component } from 'react';
import '../style/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landingPageContainer">
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className="landingPageHeader">Welcome to my Playground!</h1>
        <p className="landingPageInfo">This is my playground for experimenting with new concepts and ideas. It's a place
           to tackle challenging situations, explore new technologies, think outside the box,
           push the limits of creativity, and most of all have fun doing it!
        </p>
      </div>
    )
  }
}

export default Landing;
