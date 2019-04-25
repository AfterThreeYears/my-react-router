import React, { PureComponent } from 'react'
import TestContextChildren from './TestContextChildren';
import Context from './context';

const { Provider } = Context;

export default class TestContext extends PureComponent {
  constructor() {
    super();
    this.handleChangeName = (name) => {
      this.setState({ name });
    }
    this.state = { name: 'shell', changeName: this.handleChangeName };
  }
  render() {
    return (
      <Provider value={this.state}>
        <div>
          TestContextChildren:
          <TestContextChildren />
        </div>
      </Provider>
    )
  }
}
