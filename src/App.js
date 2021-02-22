import "./App.css";
import React from "react";
import priceData from "./data";
import moment from "moment";
import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import StockChart from "./components/StockChart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="left">
        <div className="stock__graph">
          <StockChart />
        </div>
        <div className="stock__statement"></div>
      </div>
      <div className="right">
        {/* Top Gainers */}
        {/* Top Losers */}
        {/* Key Persons */}
      </div>
    </div>
  );
}

export default App;
