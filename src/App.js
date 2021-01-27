import Layout from "./components/Layout";

import Home from "./pages/home";
import Menu from "./pages/menu";
import Apothecary from "./pages/apothecary";
import Academy from "./pages/academy";
import Contact from "./pages/contact";

import React from "react";
import { Route } from "react-router";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/apothecary" component={Apothecary} />
      <Route path="/academy" component={Academy} />
      <Route path="/contact" component={Contact} />
      {/* <Route component={NotFound} /> */}
    </Layout>
  );
}

export default App;
