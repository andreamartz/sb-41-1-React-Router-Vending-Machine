import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";
import Chips from "./Chips";
import Cupcakes from "./Cupcakes";
import Soda from "./Soda";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/cupcakes'>
          <Cupcakes />
        </Route>
        <Route exact path='/soda'>
          <Soda />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
