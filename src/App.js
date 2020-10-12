import React from "react";
import StockTable from "./components/StockTable";
import { Route } from "react-router-dom";

import AppleDetails from "./components/companies/apple/AppleDetails";
import GoogleDetails from "./components/companies/google/GoogleDetails";
import MicrosoftDetails from "./components/companies/microsoft/MicrosoftDetails";
import TeslaDetails from "./components/companies/tesla/TeslaDetails";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Route exact path="/" component={StockTable} />
        <Route path="/appledetails" component={AppleDetails} />
        <Route path="/googledetails" component={GoogleDetails} />
        <Route path="/microsoftdetails" component={MicrosoftDetails} />
        <Route path="/tesladetails" component={TeslaDetails} />
      </div>
    </div>
  );
};

export default App;
