import { Component } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route
          path="/"
          exact
          render={(routerProps) => {
            return <Home {...routerProps} />;
          }}
        />
        <Route path="/upload" component={Upload} />
        <Route
          path="/video/:videoId"
          render={(routerProps) => {
            return <Home {...routerProps} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
