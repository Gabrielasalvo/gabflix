import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function CadastroVideo() {
  return (
    <div>
      Pagina de cadastro
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/cadastro/video" component={CadastroVideo}/>
      <App />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
