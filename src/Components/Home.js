import React, { Component } from 'react';
import UserList from './UserList';
import UserAdd from './UserAdd';
import { Route, Link } from '../react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link to={'/home/list'}>UserList</Link>
        <Link to={'/home/add'}>Useradd</Link>
        <section>
          <Route path={'/home/list'} component={UserList} />
          <Route path={'/home/add'} component={UserAdd} />
        </section>
      </div>
    );
  }
}

export default Home;
