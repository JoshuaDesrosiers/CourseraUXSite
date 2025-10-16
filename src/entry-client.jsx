// entry-client.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Wip from "./wip";

function MainWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route index path="wip" element={<Wip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.hydrateRoot(document.getElementById("root"), <MainWrapper />);
