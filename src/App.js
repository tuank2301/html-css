import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Text from "./pages/01-text";
import List from "./pages/02-list";
import Link from "./pages/03-link";
import Images from "./pages/04-images";
import Table from "./pages/05-table";
import Form from "./pages/06-form";
import Color from "./pages/07-color";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/text' component={Text} />
          <Route path='/list' component={List} />
          <Route path='/link' component={Link} />
          <Route path='/images' component={Images} />
          <Route path='/table' component={Table} />
          <Route path='/form' component={Form} />
          <Route path='/color' component={Color} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
