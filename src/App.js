import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Connect from "./components/ConnectMeta";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
