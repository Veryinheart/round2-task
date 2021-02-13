import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function App() {
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    // console.log(process.env)

    Axios.get(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => {
        let temp = res.data["Realtime Currency Exchange Rate"];
        // console.log(res.data["Realtime Currency Exchange Rate"]);
        setCoinData({
          name: temp["2. From_Currency Name"],
          price: temp?.["5. Exchange Rate"],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {Object.keys(coinData).length !== 0 ? (
        <>
          <div className="top">
            <strong>
              {coinData.name}
              <br />
              <br />
              USD${coinData.price?.substring(0, coinData.price.indexOf("."))}
            </strong>
          </div>
          <div className="bottom">
            <strong>{dayjs(Date.now()).format("DD/MM/YYYY")}</strong>
          </div>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default App;
