import React from "react";
import { Route, Routes, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import ReactGA from 'react-ga';

ReactGA.initialize(GA_KEY);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </div>
  );
};

export default App;
