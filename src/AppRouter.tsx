import React from "react";
import { Switch, Route } from "react-router-dom";
import "react-bootstrap";
// Import all views
import { NotFound, Contact, Privacy, Home, Login } from "./views";

export default function AppRouter() {
  return (
    <section>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </section>
  );
}
