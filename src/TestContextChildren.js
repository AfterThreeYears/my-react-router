import React, { Component } from 'react'
import Context from './context';

export default class TestContextChildren extends Component {
  static contextType = Context
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.context);
  }
  
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log('render', this.context);
    console.log('TestContextChildren render');
    return (
      <div>
        {this.context.name}
        <button onClick={() => this.context.changeName(Math.random())}>click</button>
      </div>
    )
  }
}

