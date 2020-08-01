import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dough from "../pages/Dough";
import Size from "../pages/Size";
import Topping from "../pages/Topping";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/dough" component={Dough}></Route>
    <Route path="/size" component={Size}></Route>
    <Route path="/topping" component={Topping}></Route>
  </Switch>
);

export default Routes;
