import React, { Component } from 'react';
import context from './context';
import pathToRegExp from 'path-to-regexp';

class Switch extends Component {
  render() {
    return (
      <context.Consumer>
        {state => {
          const pathname = state.location.pathname;
          for (let i = 0; i < this.props.children.length; i++) {
            const child = this.props.children[i];
            const { path = '' } = child.props;
            const result = pathToRegExp(path, [], { end: false }).test(pathname);
            if (result) return child;
          }
          return null;
        }}
      </context.Consumer>
      
    );
  }
}

export default Switch;
