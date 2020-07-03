import React from "react";
import StockTable from "./components/StockTable";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <StockTable />
      </div>
    </div>
  );
};

export default App;
