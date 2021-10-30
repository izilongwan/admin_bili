import React from 'react';
import loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import loading from '@/components/Common/Loading';

const Login = loadable({
  loader: () => import('@/pages/Login'),
  loading
});

const Index = loadable({
  loader: () => import('@/pages/Index'),
  loading
});

const NotFound = loadable({
  loader: () => import('@/pages/Index/404'),
  loading
});

const Common = loadable({
  loader: () => import('@/pages/Index/Common'),
  loading
});

const render = () => (
  <Index>
    <Switch>
      <Route path="/" component={ Common } strict exact />
      <Route path="/carousel" component={ Common } />
      <Route path="/record" component={ Common } />
      <Route path="/promote" component={ Common } />
      <Route path="/e_sports" component={ Common } />
      <Route path="/live" component={ Common } />
      <Route path="/full" component={ Common } />
      <Route path="/origin" component={ Common } />
      <Route path="/movie" component={ Common } />
      <Route path="/bangumi" component={ Common } />
      <Route path="/rookie" component={ Common } />
      <Route path="/crawler" component={ Common } />
      {/* <Redirect from="/" to="/crawler" /> */}
      <Route component={ NotFound } />
    </Switch>
  </Index>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact strict from="/" to="/login" />

        <Route path="/login" component={ Login } />

        <Route path="/" render={ render } />

        <Route component={ Login } />
      </Switch>
    </Router>
  );
};

export default App;
