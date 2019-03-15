import React, { Component } from 'react';

import PageLinkBox from './PageLinkBox';
import '../style/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landingPageContainer">
        <div className="hero">
          <img src="/logo.png" alt="logo" className="logo" />
          <h1 className="landingPageHeader">Welcome to my Playground!</h1>
          <p className="landingPageInfo">This is my playground for experimenting with new concepts and ideas. It's a place
             to tackle challenging situations, explore new technologies, think outside the box,
             push the limits of creativity, and most of all have fun doing it!
          </p>
        </div>
          <section className="pageLinkContainer">
            <PageLinkBox
              title="Dark Mode"
              icon="/moon.png"
              info="A Playground for Dark Mode"
            />
            <PageLinkBox
              title="Animations"
              icon="/sun.gif"
              info="A Playground for Animations"
            />
            <PageLinkBox
              title="Charts and Graphs"
              icon="/graph.png"
              info="A Playground for charts and graphs"
            />
            <PageLinkBox
              title="Games"
              icon="/game.png"
              info="A Playground for games"
            />
            <PageLinkBox
              title="Data"
              icon="/data.png"
              info="A Playground for data"
            />
          </section>
      </div>
    )
  }
}

export default Landing;
