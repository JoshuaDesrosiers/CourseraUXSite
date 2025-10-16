// entry-client.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Wip from "./wip";
import About from './about'
import Connect from "./connect";

function MainWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route index path="wip" element={<Wip />} />
          <Route index path="about" element={<About />} />
          <Route index path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.hydrateRoot(document.getElementById("root"), <MainWrapper />);
