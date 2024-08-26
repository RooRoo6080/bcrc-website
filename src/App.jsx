import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import JoinPage from './pages/Join';
import ReactGA from 'react-ga';

ReactGA.initialize('G-NPKYFFHCNG');

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );
};

export default App;
