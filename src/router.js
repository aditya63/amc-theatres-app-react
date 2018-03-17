import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import ShowingNow from './components/ShowingNow';
import NotFound from "./components/NotFound";
import ComingSoon from "./components/ComingSoon";
import Reminders from './components/Reminders';
// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={ShowingNow} />
      <Route path="/showingNow" component={ShowingNow} />
      <Route path="/comingSoon" component={ComingSoon} />
      <Route path="/reminders" component={Reminders} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

// export
export { router };



