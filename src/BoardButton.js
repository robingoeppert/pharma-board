import React, { Component } from 'react';


export default class BoardButton extends Component {
  render() {
    return (
      <div className="button-stack center">
        <a className="button is-link is-medium" href={this.props.href}>{this.props.title}</a>
      </div>
    );
  }
}
