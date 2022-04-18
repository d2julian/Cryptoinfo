import React from "react";
import "./App.css";
import { useGetCoinsQuery } from "./services/coinApi";
import NavBar from "./components/NavBar";
import Coins from "./components/Coins";

function App() {
  const { data: coinList, isFetching, isSuccess, isError } = useGetCoinsQuery(1);
  console.log(coinList?.data);

  return (
    <>
      <NavBar />
      <Coins />
    </>
  );
}

export default App;
