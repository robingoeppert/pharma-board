import React, { Component } from 'react';


export default class BoardColumn extends Component {
  render() {
    return(
      <div className="column">
        <h2 className="subtitle center">{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
