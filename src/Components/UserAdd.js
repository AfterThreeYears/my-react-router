import React, { Component } from 'react';

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.input.current.value);
    this.props.history.push('/home/list');
  }
  render() {
    return (
      <div>
        UserAdd
        <form onSubmit={this.handleSubmit}>
          <input ref={this.input} />
          <button type="submit">click</button>
        </form>
      </div>
    );
  }
}

export default UserAdd;
