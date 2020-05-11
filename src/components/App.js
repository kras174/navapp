import React from "react";
import "./App.css";
import Login from "../containers/Login";
import News from "../containers/News";
import Profile from "../containers/Profile";
import TopMenu from "../containers/TopMenu";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Приложение с навигацией</h1>
        <strong>Версия приложения 0.1.1</strong>
        <TopMenu />
      </header>

      <Switch>
        <Route path="/" exact render={() => <h1>Главная страница</h1>} />
        <Route path="/login" component={Login} />
        <Route path="/news" component={News} />
        <Route path="/profile" component={Profile} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
