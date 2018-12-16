import React, { Component } from 'react';
import context from './context';
import pathToRegexp from 'path-to-regexp';

class Route extends Component {
  render() {
    const { component: Component, path, exact = false } = this.props;
    
    return (
      <context.Consumer>
        {state => {
          const { pathname } = state.location;
          let keys = [];
          const [url, ...val] = pathname.match(pathToRegexp(path, keys, { end: exact })) || [];
          const params = keys.map(d => d.name).reduce((result, current, index) => ({
            ...result,
            [current]: val[index],
          }), {});
          const props = {
            location: state.location,
            history: state.history,
            match: {
              params,
            },
          };
          if (url) return <Component {...props} />
          return null;
        }}
      </context.Consumer>
    );  
  }
}

export default Route;
