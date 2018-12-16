import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Detail from './Components/Detail';
import C404 from './Components/C404';

class App extends Component {
  render() {
    return (
      <section>
        <Router>
          <div>
          <Link to={'/home'}>home</Link>
          <Link to={'/about'}>about</Link>
          <Link to={'/detail'}>detail</Link>
            <Switch>
              <Route path={'/home'} component={Home} />
              <Route path={'/about'} component={About} />
              <Route path={'/detail'} component={Detail} />
              <Route path={'/404'} component={C404} />
              <Redirect to={'/404'} />
            </Switch>
          </div>
        </Router>
      </section>
    );
  }
}

export default App;
