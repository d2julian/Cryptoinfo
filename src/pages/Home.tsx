import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import CoinList from "../components/CoinList";
import { useDispatch } from "react-redux";
import { coinsActions } from "../store/coins";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(coinsActions.setFilter(""));
  }, []);

  return (
    <>
      <NavBar />
      <CoinList />
    </>
  );
};

export default Home;
