import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />

        <Switch>
          <Route path="/">
            <Redirect to="/recibidos" />
          </Route>
          <Route path="/recibidos" exact>
            <Recibidos />
          </Route>
          <Route path="/destacados">
            <Destacados />
          </Route>
          <Route path="/pospuestos">
            <Pospuestos />
          </Route>
          <Route path="/enviados">
            <Enviados />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/papelera">
            <Papelera />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const Recibidos = () => <h2>Recibidos</h2>;
const Destacados = () => <h2>Destacados</h2>;
const Pospuestos = () => <h2>Pospuestos</h2>;
const Enviados = () => <h2>Enviados</h2>;
const Todos = () => <h2>Todos</h2>;
const Papelera = () => <h2>Papelera</h2>;

export default App;
