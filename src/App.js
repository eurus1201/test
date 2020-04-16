import React from 'react';
import {Switch, Route, BrowserRouter as Router,Link,useRouteMatch,} from 'react-router-dom';
import HomePage from './pages/homePage'
import CreatPage from './pages/homePage'
import EditPage from './pages/homePage'
import DeletePage from './pages/homePage'


function App() {

  return <>
      <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/add">
        <CreatPage />
      </Route>
      <Route path="/edit">
        <EditPage />
      </Route>
      <Route path="/delete">
        <DeletePage />
      </Route>
    </Switch>
  </Router>,
</>;
}

export default App;
