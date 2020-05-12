import React from "react";
import Login from "../containers/Login";
import NewsContainer from "../containers/NewsContainer";
import Profile from "../containers/Profile";
import TopMenu from "../components/TopMenu";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1 className="App-title">Приложение с навигацией</h1>
        <strong>Версия приложения 1.0.0</strong>
        <TopMenu />
      </header>

      <Switch>
        <Route path="/" exact render={() => <h1>Главная страница</h1>} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={NewsContainer} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
