import React, { Component } from 'react';
import context from './context';

class HashRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/',
      },
      history: {
        push(to) {
          window.location.hash = to;
        }
      }
    };
  }
  componentDidMount() {
    this.handleChange();
    window.addEventListener('hashchange', this.handleChange.bind(this));
  }
  handleChange() {
    this.setState({
      location: {
        ...this.state.location,
        pathname: window.location.hash.slice(1) || '/',
      },
    });
  }
  render() {
    const { location, history } = this.state;
    return (
      <context.Provider value={{ location, history }}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export default HashRouter;
