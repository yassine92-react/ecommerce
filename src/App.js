import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom'
import Admin from './pages/Admin'
import Produit from '../src/pages/ProduitDashboard';
import liste_produit from '../src/pages/clients/liste_produit'
import Detais from '../src/pages/clients/detais'
import { createStore, compose, applyMiddleware } from "redux"; // create store
import { Provider } from "react-redux";
import store from "../src/store"
import Categories from './pages/CategorieManger'
import panier from  '../src/pages/clients/panier'
import steps from '../src/pages/clients/steps'
function App() {
  return (
    <Provider store={store}>

    <Router>
      {/* <Admin exact/> */}
    <Switch>
      <Route  exact path="/Categories"  component={Categories} />
      <Route  exact  path="/" component={Admin} />
      <Route path="/produit" component={Produit} /> 
      <Route path="/liste_produit" component={liste_produit} /> 
      <Route path="/Detais/:nom" exact component={Detais} />
      <Route path="/panier" exact component={panier} />

      <Route path="/steps" exact component={steps} />

      </Switch>
    </Router>
    </Provider>

  );
}

export default (App);
