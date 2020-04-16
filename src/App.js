import React from 'react';
import {Switch, Route, BrowserRouter as Router,Link,useRouteMatch,} from 'react-router-dom';
import HomePage from './pages/homePage'


function App() {

  return <>
      <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      {/* <Route path="/blog/:slug">
        <BlogPost />
      </Route> */}
    </Switch>
  </Router>,
</>;
}

export default App;
