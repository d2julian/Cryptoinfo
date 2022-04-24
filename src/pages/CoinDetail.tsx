import React from "react";
import { useLocation } from "react-router-dom";
import Coin from "../components/Coin";
import NavBar from "../components/NavBar";

type LocationState = {
  id: string;
};

function CoinDetail() {
  const location = useLocation();
  const { id } = location.state as LocationState;
  return (
    <>
      <NavBar />
      <Coin id={id} />
    </>
  );
}

export default CoinDetail;
