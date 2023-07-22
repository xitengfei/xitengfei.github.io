import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@/pages/Home/index.js';
import Resume from '@/pages/Resume';

export default class RouteConfig extends React.Component<{}, {}>{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </BrowserRouter>
    )
  }
}