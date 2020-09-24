import React from "react";
import "./index.css";
import { Router, Route, browserHistory } from 'react-router';
import Home  from './Pages/Home'
import Login from './Pages/Login'
import Annotate from './Pages/Annotate'
import { Root } from './Pages/Root'


const App = () => {
  return (
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <Route path="home" component={Home} />
              <Route path="login" component={Login} />
              <Route path="annotate" component={Annotate} />
          </Route>
      </Router>
  );
};

export default App;
