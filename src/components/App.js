import React from "react";

import IndexPage from "./IndexPage";
import VenuePage from "./VenuePage";
import { Switch, Route } from "react-router";

const App = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/venue/:id" exact component={VenuePage} />
      </Switch>
    </div>
  );
};

export default App;
