import React, { Component } from 'react';
import context from './context';

const style = {
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer',
};

class Link extends Component {
  handleClick(state) {
    state.history.push(this.props.to);
  }
  render() {
    return (
      <context.Consumer>
        {state => {
          return (<a style={style} onClick={() => this.handleClick(state)}>
            {this.props.children}
          </a>);
        }}
      </context.Consumer>
      
    );
  }
}

export default Link;
