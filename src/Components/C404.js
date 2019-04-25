import React, { Component } from 'react';

class Color extends Component {
  state = {
    colors: ['red', 'blue', 'yellow'],
    color: '',
  };

  handleChange = (color) => {
    this.setState((state) => ({
      ...state,
      color,
    }))
  }

  renderColors = () => {
    const { color, colors } = this.state;
    return colors.map(curColor => {
      return <div key={curColor} style={{ backgroundColor: color === curColor ? '#abcdef' : '#fff' }} onClick={() => this.handleChange(curColor)}>{curColor}</div>
    })
  }
  render() {
    const { color } = this.state;
    return (
      <div>
        {this.renderColors()}
        {this.props.children && this.props.children(color)}
      </div>
    );
  }
}

export default class C404 extends Component {
  render() {
    return (
      <div>
        <Color>
          {color => {
            return <div style={{backgroundColor: color, height: '20px', width: '20px'}}>{color}</div>
          }}
        </Color>
      </div>
    )
  }
}

