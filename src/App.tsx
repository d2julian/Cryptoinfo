import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { main } from "./Theme";
import CoinDetail from "./pages/CoinDetail";

function App() {
  return (
    <ThemeProvider theme={main}>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/home"></Navigate>}></Route>
        <Route path="/home/" element={<Home />}></Route>
        <Route path="/coin/:coinName/" element={<CoinDetail />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
