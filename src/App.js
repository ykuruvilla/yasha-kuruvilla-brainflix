import { Component } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {/* TODO: ASK ABOUT REDIRECT I DONT UNDERSTAND */}
          <Redirect from="/home" to="/" />
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={Upload} />
          {/* <Route
            path="/video/:videoId"
            render={(routerProps) => {
              return <Home {...routerProps} />;
            }}
          /> */}
          <Route path="/video/:videoId" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
