import React, { Component } from 'react';
import '../style/PageLinkBox.css';

class PageLinkBox extends Component {
  render(props) {
  return (
    <div className="pageLinkBox">
      <h2 className="pageLinkTitle">{this.props.title}</h2>
      <img className="pageLinkIcon" src={this.props.icon} alt="" />
      <p className="pageLinkInfo">{this.props.info}</p>
    </div>
  )
 }
}

export default PageLinkBox;
