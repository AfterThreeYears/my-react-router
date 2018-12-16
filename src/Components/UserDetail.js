import React, { Component } from 'react';

class UserDetail extends Component {
  render() {
    return (
      <div>
        UserDetail 
        {this.props.match.params.id}
      </div>
    );
  }
}

export default UserDetail;
