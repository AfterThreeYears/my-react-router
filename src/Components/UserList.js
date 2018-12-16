import React, { Component } from 'react';
import UserDetail from './UserDetail';
import { Route, Link } from '../react-router-dom';


class UserList extends Component {
  render() {
    return (
      <div>
        UserList
        <Link to={'/home/list/detail/1'}>detail1</Link>
        <Link to={'/home/list/detail/2'}>detail2</Link>
        <Route path={'/home/list/detail/:id'} component={UserDetail} />
      </div>
    );
  }
}

export default UserList;
