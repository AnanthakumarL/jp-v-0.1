import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import HomeScreen2 from "./pages/HomeScreen2.jsx";
import HomeScreen3 from "./pages/HomeScreen3.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/HomeScreen2" element={<HomeScreen2 />} />
        <Route path="/HomeScreen3" element={<HomeScreen3 />} />
      </Routes>
    </Router>
  );
};

export default App;
