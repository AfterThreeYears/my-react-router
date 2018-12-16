import React, { Component } from 'react';
import context from './context';

class Redirect extends Component {
  render() {
    return (
      <context.Consumer>
        {state => {
          state.history.push(this.props.to);
        }}
      </context.Consumer>
      
    );
  }
}

export default Redirect;
