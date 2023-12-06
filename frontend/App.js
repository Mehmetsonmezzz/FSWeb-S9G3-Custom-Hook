import React, { useState, useEffect } from "react";
import axios from "axios";
import useGeceModu from "./hooks/useGeceModu";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModu, toggleMode] = useGeceModu(false);
  const [data, writeToLs] = useLocalStorage("geceModu", false);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <h3 onClick={() => writeToLs("dark mı modlar")}>localst: {data}</h3>

      <Navbar geceModu={geceModu} toggleMode={toggleMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
