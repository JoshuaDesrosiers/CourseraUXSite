import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Wip from "./wip";
import About from "./about";
import Connect from "./connect";

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wip" element={<Wip />} />
          <Route path="about" element={<About />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
