import React, { Component } from 'react';
import '../style/Footer.css';

class Footer extends Component {

   getYear = () => {
      let today = new Date();
      let year = today.getFullYear();
      return year;
  }


  render(){
    return (
      <footer className="footer">
        <span className="me">&#169; Mr.JustinFry</span> <span className="me">{this.getYear()} </span><br />
        <a href="https://github.com/Mrjustinfry" target="_blank" rel="noopener noreferrer"><img src='github.png' alt='github' className="contact" /></a>
        <a href="mailto:mrjustinfry@gmail.com"><img src='email.png' alt='email' className="contact" /></a>
        <a href="https://www.linkedin.com/in/mrjustinfry/" target="_blank" rel="noopener noreferrer"><img src='linkedin.png' alt='linkedIn' className="contact" /></a>
      </footer>
    )
  }
}

export default Footer;
